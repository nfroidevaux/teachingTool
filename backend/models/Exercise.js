const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Exercise = new Schema({
  ExerciseName: {
    type: String
  },
  ExerciseDescription: {
    type: String
  },
  ExerciseSolution: {
    type: String
  }
},{
  collection: 'Exercise'
});

module.exports = mongoose.model('Exercise', Exercise);
