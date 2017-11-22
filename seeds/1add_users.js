exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),

    knex('users').insert({ first_name: 'test', email: 'test@test.com', age: 27, city: 'Phoenix',  zip_code: 85004, influences: 'Led Zeppelin, The Rolling Stones, Bob Dylan',description: 'Looking to join a band.',  password: 'password' }),
    knex('users').insert({ first_name: 'test2', email: 'test2@test.com', age: 30, city: 'Tucson',  zip_code: 85746, influences: 'David Bowie, Velvet Underground',description: 'I want to make something real.',  password: 'password' })

  );
};
