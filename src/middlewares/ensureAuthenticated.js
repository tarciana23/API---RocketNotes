const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");

const authConfig = require("../configs/auth");

function ensureAuthenticated(request,response,next){
    const authHeader = request.headers.authorization;//o token estará aqui

    console.log(authHeader);
    if(!authHeader){
        throw new AppError("JWT TOKEN não informado.",401)
    }
    const [,token] = authHeader.split(" ");//separando por espaço, pegando a segunda posição que é o token

    try{
        const {sub: user_id} = verify(token,authConfig.jwt.secret); //verificando se é um token válido
        request.user = {
            id: Number(user_id)
        }

        return next();
    }catch{
        throw new AppError("JWT TOKEN inválido.",401)
    }
}


module.exports = ensureAuthenticated;