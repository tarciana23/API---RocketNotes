
const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");// descriptar a senha

const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");

const knex = require("../database/knex")

class SessionsControler{

    async create(request,response){
        const { email,password} = request.body;


        //pegando os dados do usuário com o email passado
        const user = await knex("users").where({ email }).first();

        if(!user){
            throw new AppError("E-mail e/ou senha incorreta",401)
        }
        
        //comparando a senha passada pelo usuário com a senha do user
        const passwordMatched = await compare(password,user.password);

        if(!passwordMatched){
            throw new AppError("E-mail e/ou senha incorreta",401)
        }

        //se estiver tudo certo com a senha e email do usuário será gerado um toke
        const {secret,expiresIn} = authConfig.jwt
        const token = sign({},secret,{
            subject: String(user.id),
            expiresIn
        })
        return response.json({user,token}) 
    }
}

module.exports = SessionsControler;