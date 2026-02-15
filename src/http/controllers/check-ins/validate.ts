import { z } from "zod";
import type { FastifyRequest, FastifyReply } from "fastify";
import { makeValidateCheckInUseCase } from "@/usecases/factories/make-validate-check-in-usecase";

export async function validate (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  const validateCheckInParamsSchema = z.object({
    checkInId: z.string(),
  });


  const { checkInId } = validateCheckInParamsSchema.parse(request.params);

  const validateCheckInUseCase = makeValidateCheckInUseCase();
  await validateCheckInUseCase.execute({ checkInId });
  
  return reply.status(204).send(); // 204: No Content - não retorna nada, apenas confirma que a requisição foi processada com sucesso
}