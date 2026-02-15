import { RegisterUseCase } from "../register";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";

// Factory Pattern
// centralizar a criação do RegisterUseCase e suas dependências para evitar acoplamento
export function makeRegisterUseCase() {
  const usersRepository = new PrismaUsersRepository();
  return new RegisterUseCase(usersRepository);
}