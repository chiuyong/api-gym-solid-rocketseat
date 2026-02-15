// d.ts: type declaration file
// para que o fastify-jwt reconheça o tipo do request.user
import "@fastify/jwt"

declare module "@fastify/jwt" {
  export interface FastifyJWT {
    user: {
      sub: string,
      role: 'ADMIN' | 'MEMBER';
    }
  }
}
