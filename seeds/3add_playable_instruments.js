exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('playable_instruments').del(),

    knex('playable_instruments').insert([
      { user_id: 1, instrument_id:1 },
      { user_id: 1, instrument_id:4 },
      { user_id: 2, instrument_id:18 },
      { user_id: 3, instrument_id:2 },
      { user_id: 3, instrument_id:18 },
      { user_id: 4, instrument_id:18 },
      { user_id: 5, instrument_id:1 },
      { user_id: 6, instrument_id:3 },
      { user_id: 7, instrument_id:4 },
      { user_id: 8, instrument_id:2 },
      { user_id: 8, instrument_id:4 },
      { user_id: 9, instrument_id:18 },
      { user_id: 10, instrument_id:8 }
    ])






  );
};
