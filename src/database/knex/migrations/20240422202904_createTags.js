
exports.up = knex => knex.schema.createTable("tags",table=>{
    table.increments("id");
    table.text("name").notNullable();

    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");//se deletar a nota a qual essa tag está vinculada essa tag será deletada
    table.integer("user_id").references("id").inTable("users");//esse id faz referencia ao id da tabela usuário tipo chave estrangeira


});

exports.down = knex => knex.schema.dropTable("tags");
