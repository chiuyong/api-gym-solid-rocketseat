import type { FastifyRequest, FastifyReply } from "fastify";
import { makeGetUserProfileUseCase } from "@/usecases/factories/make-get-user-profile-usecase";

export async function profile (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  // os dados do token são armazenados no request.user
  // console.log(request.user.sub);

  // return reply.status(200).send();
  const getUserProfile = makeGetUserProfileUseCase();
  const { user } = await getUserProfile.execute({ userId: request.user.sub });

  return reply.status(200).send({
    user: {
      ...user,
      password_hash: undefined,
    }
  });
  
}