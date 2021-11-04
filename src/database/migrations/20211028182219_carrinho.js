
exports.up = function(knex) {
    return knex.schema.createTable("carrinho", function(table) { 
        table.string("carrinho_id").primary().notNullable();
        table.string("user_id").notNullable();
        table.foreign("user_id").references("user_id").inTable("user").onDelete("cascade");
        table.string("cd_id");
        table.foreign("cd_id").references("cd_id").inTable("cd").onDelete("NO ACTION");       
        });
};

exports.down = function(knex) {
    return knex.schema.dropTable("carrinho");
};
