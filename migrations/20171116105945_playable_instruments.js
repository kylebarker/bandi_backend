
exports.up = function(knex, Promise) {
  return knex.schema.createTable('playable_instruments', function(table) {
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
    table.integer('instrument_id').unsigned();
    table.foreign('instrument_id').references('instrument_type.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  knex('playable_instruments').truncate();
  return knex.schema.dropTable('playable_instruments')
};
