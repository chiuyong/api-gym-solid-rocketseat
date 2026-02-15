import { z } from "zod";
import type { FastifyRequest, FastifyReply } from "fastify";
import { makeSearchGymsUseCase } from "@/usecases/factories/make-search-gyms-usecase";

export async function search (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  const searchGymsQuerySchema = z.object({
    query: z.string(),
    page: z.coerce.number().min(1).default(1), // coerce: converte o valor que vem da query para um número
  });

  const { query, page } = searchGymsQuerySchema.parse(request.query);

  const searchGymsUseCase = makeSearchGymsUseCase();

  const { gyms } = await searchGymsUseCase.execute({ query, page });
  
  return reply.status(200).send({ gyms });
}