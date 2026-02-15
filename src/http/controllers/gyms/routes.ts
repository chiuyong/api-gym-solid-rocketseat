import type { FastifyInstance } from "fastify";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { create } from "./create";
import { search } from "./search";
import { nearby } from "./nearby";
import { verifyUserRole } from "@/http/middlewares/verify-user-role";

export async function gymsRoutes(app: FastifyInstance) {
    // middleware para verificar se o usuário está autenticado
    // addHook: adiciona um hook (função) para executar antes de executar a rota
    app.addHook('onRequest', verifyJWT);

    app.post('/gyms', { onRequest: [verifyUserRole('ADMIN')] }, create);

    app.get('/gyms/search', search);
    app.get('/gyms/nearby', nearby);
}
