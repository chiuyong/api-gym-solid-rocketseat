import { z } from "zod";
import type { FastifyRequest, FastifyReply } from "fastify";
import { makeFetchNearbyGymsUseCase } from "@/usecases/factories/make-fetch-nearby-gyms-usecase";

export async function nearby (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  const nearbyGymsQuerySchema = z.object({
    latitude: z.coerce.number().refine(value => { // coerce: converte o valor que vem da query params para um número
      return Math.abs(value) <= 90;
    }, {
      message: 'Latitude must be between -90 and 90',
    }),
    longitude: z.coerce.number().refine(value => {
      return Math.abs(value) <= 180;
    }, {
      message: 'Longitude must be between -180 and 180',
    }),
    page: z.coerce.number().min(1).default(1), // coerce: converte o valor que vem da query para um número
  });

  const { latitude, longitude, page } = nearbyGymsQuerySchema.parse(request.query); // parse: converte o valor que vem da query para um objeto

  const fetchNearbyGymsUseCase = makeFetchNearbyGymsUseCase();

  const { gyms } = await fetchNearbyGymsUseCase.execute({ userLatitude: latitude, userLongitude: longitude, page });

  return reply.status(200).send({ gyms });
}