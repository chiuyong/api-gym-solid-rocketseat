import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-repository";
import { CreateGymUseCase } from "../create-gym";

// Factory Pattern
// Cria entidades com suas dependências para evitar acoplamento
// Não deve ter lógica de negócio no factory
export function makeCreateGymUseCase() {
  const gymsRepository = new PrismaGymsRepository();
  return new CreateGymUseCase(gymsRepository);
}