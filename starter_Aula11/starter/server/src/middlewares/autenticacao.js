import jwt from "jsonwebtoken";


/**
 * Middleware que exige um token JWT válido no header Authorization.
 * Formato esperado: "Authorization: Bearer <token>".
 *
 * Se o token for válido, guarda os dados do usuário em `req.usuario` e
 * chama `next()` para seguir para a rota. Caso contrário, responde
 * 401 (não autenticado) e interrompe a requisição.
 */
export function exigirAutenticacao(req, res, next) {
  const cabecalho = req.headers.authorization
   if (!cabecalho || !cabecalho.startsWith("Bearer")){
    return res.status(401).json({erro: "token de autentificação ausente"})
   }
   const token = cabecalho.slice("Bearer ".length)

   try{
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.usuario = payload
    next()
   }
   catch{
    return res.status(401).json({erro:"Token de autentificação invalido ou expirado"})
   }
}
