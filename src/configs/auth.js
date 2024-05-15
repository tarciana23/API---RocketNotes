module.exports = {
    jwt: {
        secret: process.env.AUTH_SECRET || "default",
        expiresIn: "1d",
    }
}
//autenticar as rotas do usuário