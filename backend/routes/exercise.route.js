const express = require('express');
const app = express();
const exerciseRoutes = express.Router();

// Require Exercise model in our routes module
let Exercise = require('../models/Exercise');

// Define store route
exerciseRoutes.route('/add').post(function (req, res) {
  let exercise = new Exercise(req.body);
  exercise.save()
    .then(product => {
      res.status(200).json({'Exercise': 'Exercise has been added successfully'});
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

// Define get data(index or listing) route
exerciseRoutes.route('/').get(function (req, res) {
  Exercise.find(function (err, exercises){
    if(err) {
      console.log(err);
    }
    else {
      res.json(exercises);
    }
  });
});

// Define edit route
exerciseRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Exercise.findById(id, function (err, exercise){
    res.json(exercise);
  });
});

// Define update route
exerciseRoutes.route('/update/:id').post(function (req, res) {
  Exercise.findById(req.params.id, function(err, exercise) {
    if (!exercise) {
      res.status(404).send("Record not found");
    } else {
      exercise.ExerciseName = req.body.ExerciseName;
      exercise.ExerciseDescription = req.body.ExerciseDescription;
      exercise.ExerciseSolution = req.body.ExerciseSolution;

      exercise.save().then(exercise => {
        res.json("Update complete");
      })
      .catch(err => {
        res.status(400).send("unable to update the database");
      });
    }
  });
});


// Define delete route
exerciseRoutes.route('/delete/:id').get(function (req, res) {
  Exercise.findByIdAndRemove({_id: req.params.id}, function(err, exercise) {
    if(err) {
      res.json(err);
    } else {
      res.json('Successfully removed');
    }
  });
});

module.exports = exerciseRoutes;
