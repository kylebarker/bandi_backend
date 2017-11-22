var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')
var bcrypt = require('bcrypt');


/* GET users listing. */
router.get('/', function(req, res, next) {
  knex.raw(`SELECT * FROM users`)
    .then(data => {
      res.json(data.rows)
    })
});

/* CREATE USER */
router.post('/create', function(req,res,next) {
  console.log(req.body);
  bcrypt.hash(req.body.password, 8, function(err, hash){
    knex('users')
      .returning('id')
      .insert({email: `${req.body.email}`, password: `${hash}`})
      .then(function(data){
        res.send(data)
    })
  })
})


/*LOGIN USER*/
router.post('/login', function(req,res,next) {
  knex.raw(`SELECT * FROM WHERE email = '${req.body.email}'`)
    .then(user => {
      var userid = user.rows[0].id

      bcrypt.compare(req.body.password, user.rows[0].password, function(err, resp){
        if(resp){
          /* get use info */
        }
      })
    })
})

/* Get user info */
router.get('/:id', function(req, res, next) {
  knex.raw(`select users.id, users.first_name, users.age, users.city, users.zip_code,users.description, users.influences, instrument_type.name as instrument, music_genres.name as genre from playable_instruments, users, instrument_type, music_genres, favorite_genres where playable_instruments.instrument_id = instrument_type.id and playable_instruments.user_id = users.id and favorite_genres.genre_id = music_genres.id and favorite_genres.user_id = users.id and users.id = ${req.params.id}`)
    .then(data => {
      res.json(data.rows)
    })
})

router.post('/:id/edit', function(req,res,next){
  knex.raw(`UPDATE users set first_name = '${req.body.first_name}', age = '${req.body.age}', city = '${req.body.city}', zip_code = '${req.body.zip_code}', description = '${req.body.description}', influences = '${req.body.influences}' where id = ${req.params.id}`)
    .then(stuff => {
      res.send(stuff)
    })
})
/* Get Basic User Info */
router.get('/new/:id', function(req,res,next){
  knex.raw(`select users.id, users.first_name, users.age, users.city, users.zip_code,users.description, users.influences from users where users.id = ${req.params.id}`)
    .then(data => {
      res.json(data.rows)
    })
})



/* Delete user */
router.delete('/:id', function (req,res){
  knex.raw(`DELETE from users where id = ${req.params.id}`)
    .then(data => {
      res.send('USER DELETED')
    })
})





module.exports = router;
