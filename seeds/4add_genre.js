exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('music_genres').del(),

    knex('music_genres').insert({ name: "African" }),
    knex('music_genres').insert({ name: "Alternative Rock" }),
    knex('music_genres').insert({ name: "Bluegrass" }),
    knex('music_genres').insert({ name: "Blues" }),
    knex('music_genres').insert({ name: "Classical" }),
    knex('music_genres').insert({ name: "Country" }),
    knex('music_genres').insert({ name: "Country Pop" }),
    knex('music_genres').insert({ name: "Electronic" }),
    knex('music_genres').insert({ name: "Folk" }),
    knex('music_genres').insert({ name: "Funk" }),
    knex('music_genres').insert({ name: "Hard Rock" }),
    knex('music_genres').insert({ name: "Hip Hop" }),
    knex('music_genres').insert({ name: "Jazz" }),
    knex('music_genres').insert({ name: "Latin" }),
    knex('music_genres').insert({ name: "Metal" }),
    knex('music_genres').insert({ name: "Pop" }),
    knex('music_genres').insert({ name: "R&B" }),
    knex('music_genres').insert({ name: "Reggae" }),
    knex('music_genres').insert({ name: "Religious" }),
    knex('music_genres').insert({ name: "Rock" }),
    knex('music_genres').insert({ name: "Western" })
  );
};
