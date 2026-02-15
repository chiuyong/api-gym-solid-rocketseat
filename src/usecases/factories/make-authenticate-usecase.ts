import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { AuthenticateUseCase } from "../authenticate";

// Factory Pattern
// Cria entidades com suas dependências para evitar acoplamento
// Não deve ter lógica de negócio no factory
export function makeAuthenticateUseCase() {
  const usersRepository = new PrismaUsersRepository();
  return new AuthenticateUseCase(usersRepository);
}