import { z } from "zod";
import type { FastifyRequest, FastifyReply } from "fastify";
import { makeCreateGymUseCase } from "@/usecases/factories/make-create-gym-usecase";

export async function create (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  const createGymBodySchema = z.object({
    title: z.string(),
    description: z.string().nullable(),
    phone: z.string().nullable(),
    latitude: z.coerce.number().refine(value => { // coerce: converte o valor que vem da query params para um número
      return Math.abs(value) <= 90;
    }, {
      message: 'Latitude must be between -90 and 90',
    })  ,
    longitude: z.coerce.number().refine(value => { // coerce: converte o valor que vem da query params para um número
      return Math.abs(value) <= 180;
    }, {
      message: 'Longitude must be between -180 and 180',
    }),
  });

  const { title, description, phone, latitude, longitude } = createGymBodySchema.parse(request.body);

  const createGymUseCase = makeCreateGymUseCase();

  await createGymUseCase.execute({ title, description, phone, latitude, longitude });
  
  return reply.status(201).send();
}