import type { FastifyRequest, FastifyReply } from "fastify";

export async function refresh (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  await request.jwtVerify({ onlyCookie: true });
  
  const token = await reply.jwtSign(
    { role: request.user.role }, 
    {
    sign: {
      sub: request.user.sub,
    },
  });

  const refreshToken = await reply.jwtSign(
    { role: request.user.role }, 
    {
    sign: {
      sub: request.user.sub,
      expiresIn: '7d', // expiresIn: tempo de expiração do refresh token
    },
  });

  return reply.setCookie('refreshToken', refreshToken, {
    path: '/', // / -> todas as rotas da aplicação
    secure: true, // true -> apenas HTTPS
    sameSite: true, // true -> apenas o mesmo domínio
    httpOnly: true, // true -> apenas o backend pode acessar o cookie
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 dias em milissegundos
  }).status(200).send({ token });
  
}