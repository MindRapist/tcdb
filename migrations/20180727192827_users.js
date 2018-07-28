exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
      table.increments();
      table.text('name').notNullable();
      table.text('email').notNullable();
      table.text('access_token').notNullable();
      table.boolean('blocked').notNullable().default(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.text('created_ip').notNullable();
      table.timestamp('last_login').notNullable();
      table.text('last_ip').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users');
};
