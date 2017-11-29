var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')
var bcrypt = require('bcrypt');


/* GET USERS */
router.get('/', function(req, res, next) {
  knex.raw(`SELECT * FROM users`)
    .then(data => {
      res.json(data.rows)
    })
});

/* CREATE USER */
router.post('/create', function(req,res,next) {
  console.log(req.body);
  // bcrypt.hash(req.body.password, 8, function(err, hash){
    knex('users')
      .returning('id')
      .insert({email: `${req.body.email}`, password: `${req.body.password}`})
      .then(function(data){
        res.send(data)
    })
  // })
})


/*LOGIN USER*/
router.post('/login', function(req,res,next) {
  knex.raw(`select * from users where email = ${req.body.email}`)
    .then(user => {
      var dataPassword = `'${user.rows[0].password}'`
      var userPassword = `'${req.body.password}'`
      var userid = user.rows[0].id
      if(dataPassword === userPassword){
        knex.raw(`select users.id, users.first_name, users.age, users.city, users.zip_code,users.description, users.influences, instrument_type.name as instrument from playable_instruments, users, instrument_type where playable_instruments.instrument_id = instrument_type.id and playable_instruments.user_id = users.id and users.id = ${userid}`)
          .then(data => {
            console.log('get user data', data.rows)
            res.json(data.rows)
          })
      }
    })
})

/* GET USER INFO */
router.get('/:email', function(req, res, next) {
  knex.raw(`select users.id, users.first_name, users.age, users.city, users.zip_code,users.description, users.influences, instrument_type.name as instrument from playable_instruments, users, instrument_type where playable_instruments.instrument_id = instrument_type.id and playable_instruments.user_id = users.id and users.email = '${req.params.email}'`)
    .then(data => {
      console.log('get user data', data.rows)
      res.json(data.rows)
    })
})


/* GET SEARCH USERS */
router.get('/:id/search', function(req,res,next){
  knex.raw(`select
    users.id,
		users.email,
		users.first_name,
		users.age,
		users.city,
		users.zip_code,
		users.influences,
		users.description,
		ARRAY(SELECT name FROM instrument_type, playable_instruments,users as U WHERE U.id = users.id  AND users.id = playable_instruments.user_id AND playable_instruments.instrument_id=instrument_type.id ) as instruments
from 	users
where 	(users.city = ${req.query.city} or users.zip_code = ${req.query.zip_code}) and users.id != ${req.params.id}`)
    .then(data => {
      res.json(data.rows)
    })
})


/* GET A USERS DATA */
router.get('/:id/user', function(req,res,next){
  knex.raw(`select
    users.id,
		users.first_name,
		users.age,
		users.city,
		users.zip_code,
		users.description,
		users.influences,
		ARRAY (SELECT name FROM instrument_type, playable_instruments,users WHERE users.id = ${req.params.id} AND users.id = playable_instruments.user_id AND playable_instruments.instrument_id=instrument_type.id )
    FROM	users
    WHERE	users.id = ${req.params.id}`)
      .then(data => {
        res.json(data.rows)
      })
})


/* GET MATCHED USERS */
router.get('/:id/matched', function(req,res,next){
  knex.raw(`
    SELECT
      users.id,
      users.first_name,
  		users.age,
  		users.city,
  		users.zip_code,
  		ARRAY(SELECT name FROM instrument_type, playable_instruments,users as U WHERE U.id = users.id  AND users.id = playable_instruments.user_id AND playable_instruments.instrument_id=instrument_type.id ) as instruments
		FROM matches
		JOIN users on matches.match_id = users.id
		WHERE matches.user_id =${req.params.id}`)
      .then(data => {
        res.json(data.rows)
      })
})

/* CREATE NEW MATCH */
router.post('/:uid/match/:mid', function(req,res,next){
  knex('matches')
    .insert([{user_id: `${req.params.uid}`, match_id: `${req.params.mid}`},{user_id: `${req.params.mid}`, match_id: `${req.params.uid}`}])
    .then(data =>{
        res.send(data)
    })

})

/* GET ALL MESSAGES FROM USER TO USER */
router.get(`/:id/message/:mid`, function(req,res,next){
  knex.raw(`
      select messages.*, users.first_name as from_name
      from messages
      inner join users on users.id = messages.from_id
      WHERE (from_id = ${req.params.id} and to_id = ${req.params.mid})
      OR (from_id = ${req.params.mid} and to_id = ${req.params.id})
      ORDER BY created_at
    `)
    .then(data => {

      let someData = [];

      data.rows.map(message => {
        let messageObject = {
          _id: message.id,
          text: message.message,
          createdAt: new Date(),
          user: {
            _id: req.params.id == message.from_id ? 1 : 2,
            name: message.from_name
          }
        }
        someData.unshift(messageObject)
      })
      res.json(someData)
    })
})

/* POST NEW MESSAGE FROM USER TO USER */
router.post('/:id/message/:mid', function(req,res,next){
  knex('messages')
    .insert({from_id: `${req.params.id}`, to_id: `${req.params.mid}`, message: `${req.body.message}`})
    .then(data => {
      res.send(data)
    })
})




module.exports = router;
