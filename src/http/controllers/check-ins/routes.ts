import type { FastifyInstance } from "fastify";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { create } from "./create";
import { validate } from "./validate";
import { history } from "./history";
import { metrics } from "./metrics";
import { verifyUserRole } from "@/http/middlewares/verify-user-role";

export async function checkInsRoutes(app: FastifyInstance) {
    // middleware para verificar se o usuário está autenticado
    // addHook: adiciona um hook (função) para executar antes de executar a rota
    app.addHook('onRequest', verifyJWT);

    app.post('/gyms/:gymId/check-ins', create);
    app.patch('/check-ins/:checkInId/validate', { onRequest: [verifyUserRole('ADMIN')] }, validate);

    app.get('/check-ins/history', history);
    app.get('/check-ins/metrics', metrics);
}
