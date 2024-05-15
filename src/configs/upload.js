const path = require("path")
const multer = require("multer");//biblioteca para fazer upload
const crypto = require("crypto");//gerar hashs

const TMP_FOLDER = path.resolve(__dirname,"..","..","tmp");
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER,"uploads");//onde a imagem realmente vai ficar

//passando a pasta onde deve ser guardada a imagem e o nome que ela vai receber
const MULTER = {
    storage: multer.diskStorage({
        destination: TMP_FOLDER,//pasta onde a imagem vai ser mandada
        filename(request,filename,callback){
            const fileHash = crypto.randomBytes(10).toString("hex");//garantondp de cada imagem vai ter seu nome
            const fileName = `${fileHash}-${filename.originalname}`;

            return callback(null,fileName);
        }
    })
}

module.exports = {
    TMP_FOLDER,
    UPLOADS_FOLDER,
    MULTER,
}