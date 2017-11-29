exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('instrument_type').del(),

    knex('instrument_type').insert([
      { name: "Guitar" },
      { name: "Bass" },
      { name: "Drums" },
      { name: "Vocals" },
      { name: "Keyboard" },
      { name: "Piano" },
      { name: "Banjo" },
      { name: "Cello" },
      { name: "Clarinet" },
      { name: "DJ" },
      { name: "Double Bass" },
      { name: "Flute" },
      { name: "French Horn" },
      { name: "Harmonica" },
      { name: "Lap Steel" },
      { name: "Mandolin" },
      { name: "Piccolo" },
      { name: "Producer" },
      { name: "Saxophone" },
      { name: "Trombone" },
      { name: "Trumpet" },
      { name: "Tuba" },
      { name: "Ukulele" },
      { name: "Viola" },
      { name: "Violin" }
    ])
  );
};
