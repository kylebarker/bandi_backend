
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorite_genres', function(table) {
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
    table.integer('genre_id').unsigned();
    table.foreign('genre_id').references('music_genres.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  knex('favorite_genres').truncate();
  return knex.schema.dropTable('favorite_genres')
};
