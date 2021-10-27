exports.up = function(knex) {
    return knex.schema.createTable("cd", function(table) {
      table.string("cd_id").primary().notNullable();
      table.string("album").notNullable();
      table.string("autor").notNullable();
      table.string("valor").notNullable();
      table.string("data").notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("cd");
  };
  
