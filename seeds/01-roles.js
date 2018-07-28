exports.seed = async (knex, Promise) => {
  await knex('roles').del();
  await knex.raw('ALTER SEQUENCE id RESTART WITH 3;');
  return knex('roles').insert([
    {
      id: 1,
      name: 'user' 
    },
    {
      id: 2,
      name: 'mod'
    },
    {
      id: 3,
      name: 'admin'
    }
  ]);
};
