exports.up = (knex, Promise) => {
    return knex.schema.table('users', (table) => {
        table.integer('role').unsigned().references('id').inTable('roles');
    });
  };
  
  exports.down = (knex, Promise) => {
    return knex.schema.table('users', (table) => {
        table.dropColumn('roles');
    });
  };