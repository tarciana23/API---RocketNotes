const fs = require("fs");//lidar com maniputalçao de arquivos
const path = require("path");//lidar com os diretórios
const uploadConfig = require("../configs/upload");


class DiskStorage{
/*Quando a imagem chegar ela ficará na pasta temporária e depois
o backend irá colocá-la na pasta upload_folder
 */
    async saveFile(file){
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER,file),//o path.resolve uma sequência de segmentos de caminho para um caminho absoluto
            path.resolve(uploadConfig.UPLOADS_FOLDER,file)
        )
        return file;
    }

    async deleteFile(file){
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER,file);//buscando o arquivo
        try{
            await fs.promises.stat(filePath)//o stat retorna o status de uma operacao

        }catch{
            return;
        }

        await fs.promises.unlink(filePath);//unlik remove arquivos
    }
}

module.exports = DiskStorage;