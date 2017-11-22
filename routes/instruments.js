var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')

var promises = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex.raw(`SELECT * FROM instrument_type`)
    .then(data => {
      res.json(data.rows)
    })
});

router.get('/i2u', function(req, res, next) {
  knex.raw(`SELECT * FROM playable_instruments`)
    .then(data => {
      res.json(data.rows)
    })
})

router.get('/:id', function(req, res, next) {
  knex.raw(`SELECT * FROM instrument_type where id = ${req.params.id}`)
    .then(data => {
      res.json(data.rows[0])
    })
})

router.post('/:userid', function(req,res,next){
  console.log(req.body)
  knex('playable_instruments').insert(req.body.instruments)
    .then(whatever => {
      res.send(whatever)
    })
})

router.delete('/:instrumentid/:userid', function (req,res){
  knex.raw(`DELETE from playable_instruments where instrument_id = ${req.params.instrumentid} and user_id = ${req.params.userid}`)
    .then(data => {
      res.send('SUCCESS')
    })
})





module.exports = router;
