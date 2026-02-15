/*
 Finalidade: Validar as variáveis de ambiente do projeto, garantindo que elas estão corretas e 
 compatíveis com o projeto.
*/
import 'dotenv/config';
import { z } from 'zod';

// Definir o schema das variáveis de ambiente
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  JWT_SECRET: z.string(),
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string(),
});

// Validar as variáveis de ambiente
const _env = envSchema.safeParse(process.env);

// Se a validação falhar, exibir o erro e lançar uma exceção
if (!_env.success) {
  console.error('Invalid environment variables', _env.error.format());
  throw new Error('Invalid environment variables');
}

// Exportar as variáveis de ambiente validadas
export const env = _env.data;
