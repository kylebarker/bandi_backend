
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instrument_type', function(table) {
    table.increments();
    table.string('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('instrument_type')
};
