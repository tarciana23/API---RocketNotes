const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");


const notesRoutes = Router();
/*
function myMiddlewarer(request,response,next){
    console.log("Você passou pelo Middleware!");
    if(!request.body.isAdmin){
        return response.json({message: "user unauthorized"});
    }
    next();//chama o destino
}
*/

const notesController = new NotesController();//instanciando

notesRoutes.use(ensureAuthenticated);

notesRoutes.get("/", notesController.index);
notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id",notesController.delete);

/*
notesRoutes.post("/", myMiddlewarer, NotesController.create);

*/
module.exports = notesRoutes;//exportando as rotas as rotas