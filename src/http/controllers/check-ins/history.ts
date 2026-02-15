import { z } from "zod";
import type { FastifyRequest, FastifyReply } from "fastify";
import { makeFetchUserCheckInsHistoryUseCase } from "@/usecases/factories/make-fetch-user-check-ins-history-usecase";

export async function history (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  const checkInHistoryQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1), // coerce: converte o valor que vem da query para um número
  });

  const { page } = checkInHistoryQuerySchema.parse(request.query);

  const fetchUserCheckInsHistoryUseCase = makeFetchUserCheckInsHistoryUseCase();
  
  const { checkIns } = await fetchUserCheckInsHistoryUseCase.execute({ userId: request.user.sub, page });
  
  return reply.status(200).send({ checkIns });
}