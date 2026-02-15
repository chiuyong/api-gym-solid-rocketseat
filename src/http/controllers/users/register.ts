import { z } from "zod";
import type { FastifyRequest, FastifyReply } from "fastify";
import { UserAlreadyExistsError } from "@/usecases/errors/user-already-exists-error";
import { makeRegisterUseCase } from "@/usecases/factories/make-register-usecase";

export async function register (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const createUserBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(6),
    });

    const { name, email, password } = createUserBodySchema.parse(request.body);

    try {
      const registerUseCase = makeRegisterUseCase();

      await registerUseCase.execute({ name, email, password });
      return reply.status(201).send();
    } catch (error) {
      if (error instanceof UserAlreadyExistsError) {
        return reply.status(409).send({ message: error.message });
      }

      throw error;
    }
  }