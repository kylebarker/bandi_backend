exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('favorite_genres').del(),

    knex('favorite_genres').insert({ user_id: 1, genre_id:1 }),
    knex('favorite_genres').insert({ user_id: 1, genre_id:2 }),
    knex('favorite_genres').insert({ user_id: 1, genre_id:3 }),
    knex('favorite_genres').insert({ user_id: 2, genre_id:10 }),
    knex('favorite_genres').insert({ user_id: 2, genre_id:7 })
  );
};
