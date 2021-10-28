exports.up = function(knex) {
    return knex.schema.createTable('cd', function(table) {
      table.string("cd_id").primary().notNullable();
      table.string("nome").notNullable();
      table.string("artista").notNullable();
      table.foreign("artista_id").references("artista_id").inTable("artista").onDelete("cascade");
      table.string("categoria").notNullable();
      table.string("valor").notNullable();
      table.date("data").notNullable();
      table.int("popularidade").notNullable();
      table.date("compra");
      

    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("cd");
  };
  
