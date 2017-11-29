exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),

    knex('users').insert([{
      first_name: 'Dylan',
      email: 'Test@test.com',
      age: 36,
      city: 'Phoenix',
      zip_code: 85004,
      influences: 'Flaming Lips',
      description: 'I want to make something real.',
      password: 'password'
    },
    {
      first_name: 'Ismael',
      email: 'Test2@test.com',
      age: 30,
      city: 'Phoenix',
      zip_code: 85004,
      influences: 'Daft Punk',
      description: 'Looking to make some electronic music.',
      password: 'password'
    },
    {
      first_name: 'Natalie',
      email: 'Test3@test.com',
      age: 22,
      city: 'Phoenix',
      zip_code: 85004,
      influences: 'Odesza',
      description: 'I want to create.',
      password: 'password'
    },
    {
      first_name: 'Johnny',
      email: 'Test4@test.com',
      age: 26,
      city: 'Phoenix',
      zip_code: 85004,
      influences: 'Flume',
      description: 'Just want to make some donks.',
      password: 'password'
    },
    {
      first_name: 'Richard',
      email: 'Test5@test.com',
      age: 36,
      city: 'Phoenix',
      zip_code: 85004,
      influences: 'Metallica',
      description: 'Lets rock!',
      password: 'password'
    },
    {
      first_name: 'Bryan',
      email: 'Test6@test.com',
      age: 29,
      city: 'Chicago',
      zip_code: 60177,
      influences: 'Japandroids, The Killers',
      description: 'Looking to join a new band',
      password: 'password'
    },
    {
      first_name: 'Andrew',
      email: 'Test7@test.com',
      age: 30,
      city: 'Chicago',
      zip_code: 60177,
      influences: 'Spice Girls, Backstreet Boys',
      description: 'I want to dance all over the world',
      password: 'password'
    },
    {
      first_name: 'Claire',
      email: 'Test8@test.com',
      age: 27,
      city: 'Chicago',
      zip_code: 60177,
      influences: 'Phoenix, Bloc Party',
      description: 'I just want to play bass',
      password: 'password'
    },
    {
      first_name: 'Tom',
      email: 'Test9@test.com',
      age: 71,
      city: 'Chicago',
      zip_code: 60177,
      influences: 'Pink Floyd',
      description: 'Love recording music',
      password: 'password'
    },
    {
      first_name: 'David',
      email: 'Test10@test.com',
      age: 26,
      city: 'Phoenix',
      zip_code: 85004,
      influences: 'Bach',
      description: 'Starting a string quartet',
      password: 'password'
    }]
  )

)
};
