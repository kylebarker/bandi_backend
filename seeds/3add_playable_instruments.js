exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('playable_instruments').del(),

    knex('playable_instruments').insert({ user_id: 1, instrument_id:1 }),
    knex('playable_instruments').insert({ user_id: 1, instrument_id:2 }),
    knex('playable_instruments').insert({ user_id: 1, instrument_id:3 }),
    knex('playable_instruments').insert({ user_id: 2, instrument_id:1 }),
    knex('playable_instruments').insert({ user_id: 2, instrument_id:4 })
  );
};
