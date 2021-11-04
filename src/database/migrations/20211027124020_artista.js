
exports.up = function(knex) {
    return knex.schema.createTable("artista", function(table) {
      table.string("artista_id").primary().notNullable();
      table.string("nome").notNullable();
      table.string("cd_id");
      table.foreign("cd_id").references("cd_id").inTable("cd").onDelete("NO ACTION");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("artista");
};
