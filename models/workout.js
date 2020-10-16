const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create new document in mongod
const workoutSchema = new Schema({
  // set exercises as array
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise type"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter an exercise type"
      },
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ],
  day: { type: Date, default: Date.now }
});
// Set virtuals to true to create dynamically-created property
workoutSchema.set('toJSON', { virtuals: true });
// Add the 'totalBuration' as a dynamically-created property
workoutSchema.virtual('totalDuration').get(function() {
  // calculate total exercises duartion in the exercises array
  return this.exercises.reduce((total, exercises) => {
    return total + exercises.duration;
  }, 0);
});
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
