const sqliteConnection = require('../../../database/sqlite')

const createUsers = require('./createUsers');
/*Função para juntar todos os users */
async function migrationsRun(){
    const schemas = [
        createUsers
    ].join('');

    sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error))
}

module.exports = migrationsRun;