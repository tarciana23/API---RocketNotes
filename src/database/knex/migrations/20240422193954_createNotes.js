
exports.up = knex => knex.schema.createTable("notes",table=>{
    table.increments("id");
    table.text("title");
    table.text("description");
    table.integer("user_id").references("id").inTable("users");//esse id faz referencia ao id da tabela usuário tipo chave estrangeira

    table.timestamp("create_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());

});

exports.down = knex => knex.schema.dropTable("notes");
