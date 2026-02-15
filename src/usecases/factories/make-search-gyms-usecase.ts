import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-repository";
import { SearchGymUseCase } from "../search-gym";

// Factory Pattern
// Cria entidades com suas dependências para evitar acoplamento
// Não deve ter lógica de negócio no factory
export function makeSearchGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository();
  return new SearchGymUseCase(gymsRepository);
}