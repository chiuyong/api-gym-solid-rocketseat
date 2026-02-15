import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-repository";
import { FetchNearbyGymsUseCase } from "../fetch-nearby-gyms";

// Factory Pattern
// Cria entidades com suas dependências para evitar acoplamento
// Não deve ter lógica de negócio no factory
export function makeFetchNearbyGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository();
  return new FetchNearbyGymsUseCase(gymsRepository);
}