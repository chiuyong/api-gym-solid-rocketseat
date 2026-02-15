import { prisma } from '@/lib/prisma';
import { randomUUID } from 'node:crypto';
import 'dotenv/config';
import type{ Environment} from 'vitest/environments'
import { execSync } from 'node:child_process';

function generateDatabaseUrl(schema: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL environment variable');
  }

  const url = new URL(process.env.DATABASE_URL);
  url.searchParams.set('schema', schema);

  return url.toString();
}

export default <Environment> {
  name: 'prisma',
  viteEnvironment: 'ssr',
  async setup() {
    // Conectar ao banco de dados de testes
    // Executa antes do teardown
    const schema = randomUUID();
    const url = generateDatabaseUrl(schema);

    console.log('DATABASE_URL', url);

    process.env.DATABASE_URL = url;

    // execSync: executa um comando no terminal
    //
    execSync('npx prisma db push');

    return {
      // Limpar e desconectar do banco de dados de testes
      // Executa após o setup
      teardown: async () => {
        await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);
        await prisma.$disconnect();
      }
    }
  }
}