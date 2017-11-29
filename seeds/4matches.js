exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('matches').del(),

    knex('matches').insert([
      { user_id: 1, match_id:2 },
      { user_id: 1, match_id:3 },
      { user_id: 1, match_id:4 },
      { user_id: 2, match_id:1 },
      { user_id: 3, match_id:4 },
      { user_id: 3, match_id:1 },
      { user_id: 4, match_id:1 },
      { user_id: 4, match_id:3 }
    ])
  )
};
