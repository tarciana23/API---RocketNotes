/*Arquivo responsável por inicializar a aplicação. */
/*Routes só para manter as rotas */
/*Controlles -> parte resposnável por executar o que o usuário solicitou
processar as requisições*/
require("dotenv/config")//para lidar com os dados sensíveis


const AppError = require("../src/utils/AppError");
require("express-async-errors");
const uploadConfig = require("./configs/upload");

const cors = require("cors");
const express = require("express");//importou express

const routes = require("./routes");//aqui todas as rotas serão exportadas


const migrationsRun = require("./database/sqlite/migrations")
migrationsRun();//executabdo banco de dados


const app = express();//incializou o express
app.use(express.json())//falando para aplicação que ela vai receber JSON

app.use(cors());

app.use("/files",express.static(uploadConfig.UPLOADS_FOLDER))//buscando as imagens do usuário

app.use(routes);//agora podemos usar todas as rotas que estão no routes



app.use((error,request,response,next) =>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message:error.message
        })
    }


    return response.status(500).json({
        status:"error",
        message:"Internal Server error",
    });
});

const PORT = process.env.SERVER_PORT || 3333;//por onde a api irá esperar requisições e dar respostas

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
})                                                                                                   