
var express = require("express");

var router = express.Router();
// requiring our models
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  
  res.redirect("/drinks");
});


router.get("/drinks", function(req, res) {
  
  db.Drink.findAll({
    include: [db.Snack],
    order: [
      ["drink_name", "ASC"]
    ]
  })
  // use promise method to pass the drinks
    .then(function(dbDrink) {
      var hbsObject = {
        drink: dbDrink
      };
      return res.render("index", hbsObject);
    });
});

router.get("/alldrinks", function(req, res) {
  
  db.Drink.findAll({
    include: [db.Snack],
    order: [
      ["id", "ASC"]
    ]
  })
  // pass the drinks
    .then(function(dbDrink) {
    
      var hbsObject = {
        drink: dbDrink
      };
      return res.render("alldrinks", hbsObject);
    });
});

router.get("/allsnacks", function(req, res) {
  
  db.Snack.findAll({
    order: [
      ["id", "ASC"]
    ]
  })
  // pass the snacks
    .then(function(dbSnack) {
    
      var hbsObject = {
        snack: dbSnack
      };
      return res.render("allsnacks", hbsObject);
    });
});

router.get("/form", function(req, res) {
  res.render("form");
});

// post route to create drinks
router.post("/drinks/create", function(req, res) {
  
  db.Drink.create({
    drink_name: req.body.drink_name,
    alcohol: req.body.alcohol,
    ingredient_one: req.body.ingredient_one,
    ingredient_two: req.body.ingredient_two,
    ingredient_three: req.body.ingredient_three,
    ingredient_four: req.body.ingredient_four,
    drink_flavor: req.body.drink_flavor,
    drink_event: req.body.drink_event,
    rating: req.body.rating
  })
  
    .then(function(dbDrink) {
  
      console.log(dbDrink);
      res.redirect("/");
      
    });
});

router.post("/snacks/create", function(req, res) {
  
  db.Snack.create({
    snack_name: req.body.snack_name,
    snack_flavor: req.body.snack_flavor,
    DrinkId: req.body.DrinkId
  })
  
    .then(function(dbSnack) {
  
      console.log(dbSnack);
      res.redirect("/");
      
    });
});

module.exports = router;
