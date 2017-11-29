
exports.up = function(knex, Promise) {
  return knex.schema.createTable('matches', function(table) {
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
    table.integer('match_id').unsigned();
    table.foreign('match_id').references('users.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  knex('matches').truncate();
  return knex.schema.dropTable('matches')
};
