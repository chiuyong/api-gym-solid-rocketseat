import { authenticate } from "./authenticate";
import { profile } from "./profile";
import { register } from "./register";
import type { FastifyInstance } from "fastify";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { refresh } from "./refresh";

export async function usersRoutes(app: FastifyInstance) {
    // traduzir as rotas sempre para entidades
    app.post('/users', register);
    app.post('/sessions', authenticate);

    app.patch('/token/refresh', refresh);
    
    /**
     * Authenticated
    */
   // onRequest: [verifyJWT] -> middleware para verificar se o usuário está autenticado
   // onRequest: executa antes de executar a rota
    app.get('/me', { onRequest: [verifyJWT] }, profile);
}
