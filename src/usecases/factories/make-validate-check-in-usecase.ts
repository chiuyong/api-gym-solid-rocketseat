import { PrismaCheckInsRepository } from "@/repositories/prisma/prisma-check-ins-repository";
import { ValidateCheckInUseCase } from "../validate-check-in";

// Factory Pattern
// Cria entidades com suas dependências para evitar acoplamento
// Não deve ter lógica de negócio no factory
export function makeValidateCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository();
  return new ValidateCheckInUseCase(checkInsRepository);
}