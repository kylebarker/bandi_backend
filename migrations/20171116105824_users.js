
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('first_name');
    table.string('email');
    table.integer('age');
    table.string('city');
    table.integer('zip_code');
    table.string('influences');
    table.string('description');
    table.string('password');
  });
};

exports.down = function(knex, Promise) {

  return knex.schema.dropTable('users')
};
