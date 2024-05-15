const {Router} = require("express");

const SessionsControler = require("../controllers/SessionsControler")
const sessionsController = new SessionsControler();

const sessionsRoutes = Router();

sessionsRoutes.post("/",sessionsController.create);

module.exports = sessionsRoutes;