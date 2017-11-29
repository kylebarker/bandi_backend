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
  knex.raw(`SELECT instrument_type.name as instrument, * FROM playable_instruments join instrument_type on instrument_id = instrument_type.id join users on user_id = users.id where user_id = ${req.params.id}`)
    .then(data => {
      res.json(data.rows)
    })
})


router.post('/:userid', function(req,res,next){
  console.log(req.body)
  knex('playable_instruments').insert(req.body.instruments)
    .then(whatever => {
      res.send(whatever)
    })
})




module.exports = router;
