import type { FastifyRequest, FastifyReply } from "fastify";
import { makeGetUserMetricsUseCase } from "@/usecases/factories/make-get-user-metrics-usecase";

export async function metrics (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  const getUserMetricsUseCase = makeGetUserMetricsUseCase();

  const { checkInsCount } = await getUserMetricsUseCase.execute({ userId: request.user.sub });
  
  return reply.status(200).send({ checkInsCount });
}