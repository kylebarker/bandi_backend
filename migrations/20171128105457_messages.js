exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function(table) {
    table.increments();
    table.integer('from_id').unsigned();
    table.foreign('from_id').references('users.id').onDelete('CASCADE');
    table.integer('to_id').unsigned();
    table.foreign('to_id').references('users.id').onDelete('CASCADE');
    table.string('message');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  knex('messages').truncate();
  return knex.schema.dropTable('messages')
};
