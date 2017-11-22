var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')


/* GET users listing. */
router.get('/', function(req, res, next) {
  knex.raw(`SELECT * FROM music_genres`)
    .then(data => {
      res.json(data.rows)
    })
});

router.get('/favorites', function(req, res, next) {
  knex.raw(`SELECT * FROM favorite_genres`)
  .then(data => {
    res.json(data.rows)
  })
});


router.get('/:id', function(req, res, next) {
  knex.raw(`SELECT * FROM music_genres where id = ${req.params.id}`)
    .then(data => {
      res.json(data.rows[0])
    })
})

router.get('/user/:userid', function(req,res,next){
  knex.raw(`select * from favorite_genres where user_id = ${req.params.userid}`)
    .then(data => {
      res.json(data.rows)
    })
})

router.post('/:userid', function(req,res,next){
  knex('favorite_genres').insert(req.body.genres)
    .then(whatever => {
      res.send(whatever)
    })
})


router.delete('/:genreid/:userid', function (req,res){
  knex.raw(`DELETE from favorite_genres where genre_id = ${req.params.genreid} and user_id = ${req.params.userid}`)
    .then(data => {
      console.log('User was deleted', data)
    })
})


module.exports = router;
