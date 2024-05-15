
/* Essa página tem como objetivo reunir todas as rotas */
const { Router } = require("express");

const usersRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");
const sessionRouter = require("./sessions.routes");

const routes = Router();//criei essa variável para pegar a rota user.routes

routes.use("/users",usersRouter);//aqui toda vez que acessarem a rota /users, aqui passará os argumentos para rota user.routes.js
routes.use("/sessions",sessionRouter);
routes.use("/notes",notesRouter);
routes.use("/tags",tagsRouter)




module.exports = routes
//o routes contem todas as totas da aplicação.