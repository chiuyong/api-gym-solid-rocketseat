import { z } from "zod";
import type { FastifyRequest, FastifyReply } from "fastify";
import { makeCheckInUseCase } from "@/usecases/factories/make-check-in-usecase";

export async function create (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  const createCheckInParamsSchema = z.object({
    gymId: z.string(),
  });

  const createCheckInBodySchema = z.object({
    latitude: z.coerce.number().refine(value => { // coerce: converte o valor que vem da query params para um número
      return Math.abs(value) <= 90;
    }, {
      message: 'Latitude must be between -90 and 90',
    }),
    longitude: z.coerce.number().refine(value => { // coerce: converte o valor que vem da query params para um número
      return Math.abs(value) <= 180;
    }, {
      message: 'Longitude must be between -180 and 180',
    }),
  });

  const { gymId } = createCheckInParamsSchema.parse(request.params);
  const { latitude, longitude } = createCheckInBodySchema.parse(request.body);

  const createCheckInUseCase = makeCheckInUseCase();
  await createCheckInUseCase.execute({ userId: request.user.sub, gymId, userLatitude: latitude, userLongitude: longitude });
  
  return reply.status(201).send();
}