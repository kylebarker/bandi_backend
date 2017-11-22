
exports.up = function(knex, Promise) {
  return knex.schema.createTable('music_genres', function(table) {
    table.increments();
    table.string('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('music_genres')
};
