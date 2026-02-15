import { z } from "zod";
import type { FastifyRequest, FastifyReply } from "fastify";
import { InvalidCredentialsError } from "@/usecases/errors/invalid-credentials-error";
import { makeAuthenticateUseCase } from "@/usecases/factories/make-authenticate-usecase";

/* 
Formas de autenticação:

Basic Auth:
- Basic Auth: Usa usuário e senha para autenticar o usuário em cada requisição.
- Ao fazer o login, o backend faz o encode do e-mail e senha em base64, e envia no header da requisição (Authorization), 
para o usuário.
Exemplo: 
Authorization: Basic YWRtaW46YWRtaW4= (no formato "Basic <base64(email:senha)>")
- Ao fazer uma requisição, o backend recebe o header Authorization e decodifica para obter o e-mail e senha do usuário
- Não é recomendado, pois é possível decodificar o base64 para obter o e-mail e senha.
- Base64 é um tipo de encoding, que é um tipo de criptografia que converte os caracteres em uma sequência de bits.

JWT: JSON Web Token (mais usado em rotas HTTPS)
- Usuário faz login, envia e-mail e senha, o backend cria um token ÚNICO, não modificável e STATELESS
- Stateless: Não armazenado em nenhuma estrutura de persistência de dados (banco de dados), o token é 
enviado no header da requisição
- Back-end: Quando vai criar o token, ele usa uma PALAVRA-CHAVE (geralmente string)
- Palavra-chave: quanto mais longa e aleatória, melhor, pois não pode ser facilmente adivinhada. 
Ex: "kiopj4123i4j124$32e4sddfopijwe"
- Back-end recebe E-mail/senha e cria o token (composto por header.payload.signature) como se fosse o 
encode do e-mail e senha em base64.
- Em cada requisição, o backend recebe o header Authorization e decodifica o token usando a Palavra-chave 
para obter o e-mail e senha do usuário.
- É mais seguro, pois o token é gerado a partir da combinação(header.payload.signature) pelo backend e 
não é possível decodificar o token para obter o e-mail e senha sem a Palavra-chave.
- Não é ideal para comunicar com aplicação externa

Resumindo o processo:
- A rota de Login vai produzir JWT e retornar para o usuário
- JWT precisa ser enviado em todas as requisições dali pra frente 
no Header(cabeçalho) cujo campo é chamado de "Authorization" no formato "Bearer <token>" (o token é o JWT)

*/


export async function authenticate (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });
  
  const { email, password } = authenticateBodySchema.parse(request.body);

  try {
    const authenticateUseCase = makeAuthenticateUseCase();

    const { user } = await authenticateUseCase.execute({ email, password });

    const token = await reply.jwtSign(
      {
        role: user.role,
      }, 
      {
      sign: {
        sub: user.id,
      },
    });

    const refreshToken = await reply.jwtSign(
      {
        role: user.role,
      }, 
      {
      sign: {
        sub: user.id,
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
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: error.message });
    }

    throw error;
  }
  
}