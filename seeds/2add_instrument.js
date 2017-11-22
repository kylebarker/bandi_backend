exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('instrument_type').del(),

    knex('instrument_type').insert({ name: "Guitar" }),
    knex('instrument_type').insert({ name: "Bass" }),
    knex('instrument_type').insert({ name: "Drums" }),
    knex('instrument_type').insert({ name: "Vocals" }),
    knex('instrument_type').insert({ name: "Keyboard" }),
    knex('instrument_type').insert({ name: "Piano" }),
    knex('instrument_type').insert({ name: "Banjo" }),
    knex('instrument_type').insert({ name: "Cello" }),
    knex('instrument_type').insert({ name: "Clarinet" }),
    knex('instrument_type').insert({ name: "DJ" }),
    knex('instrument_type').insert({ name: "Double Bass" }),
    knex('instrument_type').insert({ name: "Flute" }),
    knex('instrument_type').insert({ name: "French Horn" }),
    knex('instrument_type').insert({ name: "Harmonica" }),
    knex('instrument_type').insert({ name: "Lap Steel" }),
    knex('instrument_type').insert({ name: "Mandolin" }),
    knex('instrument_type').insert({ name: "Piccolo" }),
    knex('instrument_type').insert({ name: "Producer" }),
    knex('instrument_type').insert({ name: "Saxophone" }),
    knex('instrument_type').insert({ name: "Trombone" }),
    knex('instrument_type').insert({ name: "Trumpet" }),
    knex('instrument_type').insert({ name: "Tuba" }),
    knex('instrument_type').insert({ name: "Ukulele" }),
    knex('instrument_type').insert({ name: "Viola" }),
    knex('instrument_type').insert({ name: "Violin" })
  );
};
