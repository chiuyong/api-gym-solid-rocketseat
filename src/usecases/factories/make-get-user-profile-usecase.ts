import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { GetUserProfileUseCase } from "../get-user-profile";

// Factory Pattern
// Cria entidades com suas dependências para evitar acoplamento
// Não deve ter lógica de negócio no factory
export function makeGetUserProfileUseCase() {
  const usersRepository = new PrismaUsersRepository();
  return new GetUserProfileUseCase(usersRepository);
}