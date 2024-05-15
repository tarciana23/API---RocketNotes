const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload")

const UsersController = require("../controllers/UsersController");
const UsersAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();//instanciando

const usersAvatarController = new UsersAvatarController();//instanciando


usersRoutes.post("/", usersController.create);
usersRoutes.put("/",ensureAuthenticated,usersController.update);
usersRoutes.patch("/avatar",ensureAuthenticated, upload.single("avatar"),usersAvatarController.update)
//patch quando vc quer atualiza um campo específico
/*
usersRoutes.post("/", myMiddlewarer, usersController.create);

*/
module.exports = usersRoutes;//exportando as rotas as rotas