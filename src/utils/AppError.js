class AppError {
    message;
    statusCode;

    constructor(message,statusCode = 400){
        this.message  = message;
        this.statusCode = statusCode;

    }
}

module.exports = AppError;
/* Essa classe trata os erros do lado do cliente. */