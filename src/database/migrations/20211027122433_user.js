
exports.up = function(knex) {
  return knex.schema.createTable("user", function(table) {
    table.string("user_id").primary().notNullable();
    table.string("nome").notNullable();
    table.string("email").notNullable();
    table.string("senha").notNullable();
    table.string("carrinho_id").notNullable();
    table.string("cd_id");
    table.foreign("cd_id").references("cd_id").inTable("cd").onDelete("NO ACTION");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("user");
};
