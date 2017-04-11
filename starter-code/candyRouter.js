var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var jsonParser = bodyParser.json();



var candies = [
  { 
  	"id": 1,
  	"name": "Skittles",
    "color": "Rainbow"
  },
  {
  	"id": 2,
  	"name": "Hersey Bar",
  	"color": "Brown"
  },
  {
  	"id": 3,
  	"name": "Big Red",
  	"color": "Red"
  }
]


//What would need to go into candies
//in order to pass our first test?

// INDEX
router.get('/', function(req,res) {
  res.json(candies);
	// What would go here? 
	// Hint: we want all candies in JSON format
});

// SHOW
router.get('/:id', function(req, res) {
  let x = req.params.id;
  for(var i = 0; candies.length; i++) {
    if (x == candies[i].id) {
      return(candies[i]);
    }else{
    	return("error");
    }
  }
});

// CREATE
router.post('/', function(req, res) {
  let candy = {
    id: req.body.id,
    name: req.body.name,
    color: req.body.color
  }
  candies.push(candy);
  res.json(candy);
});

// UPDATE
router.put('/:id', function(req, res) {
  candies[req.params.id-1]=req.body;
  res.end();
});

// DELETE DELETE DELETE
router.delete('/:id', function(req, res) {
  let z = req.params.id;
  for(var i = 0; i < candies.length; i++) {
    if (z == candies[i].id) {
      console.log("In if side");
  	  candies.splice(i, 1);
  	  return res.send('"message":"deleted"')
    } else { let error = 'not found';}
  }
  if(error){
  	res.send(error);
  }
});

module.exports = router;