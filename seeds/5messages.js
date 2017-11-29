exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('messages').del(),

    knex('messages').insert([
      { from_id:1, to_id:2, message:'Hey there buddy' },
      { from_id:2, to_id:1, message:'Hey there, you like making music?' },
      { from_id:1, to_id:2, message:'Love it.' }

    ])
  )
};
