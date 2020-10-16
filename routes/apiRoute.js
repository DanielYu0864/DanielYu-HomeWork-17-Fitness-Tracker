const db = require('../models');

module.exports = (app) => {
  // get route for getLastWorkout() function to get the last document
  app.get('/api/workouts', async (req, res) => {
    await db.Workout.find({}).then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      console.log('failed', err);
      res.status(400).json(err);
    });
  });
  // get route for getWorkoutsInRange() function to get the work out detail for the dashboard page
  app.get('/api/workouts/range', async (req, res) => {
    await db.Workout.find({}).then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      console.log('failed', err);
      res.status(400).json(err);
    });
  });
  // post route to create a new document with id, day info, and empty exercises array
  app.post('/api/workouts', async (req, res) => {
    await db.Workout.create({})
      .then(workoutdb => {
        console.log(workoutdb)
        res.json(workoutdb);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  // put route for addExerise() function to push new exercises object to the current document
  app.put('/api/workouts/:id', async ({body, params}, res) => {
    // console.log(body, params.id);
    await db.Workout.findByIdAndUpdate(params.id, { $push: {exercises: body} })
      .then((workout) => {
        console.log('added', workout)
        res.json(workout);
      })
      .catch(err => {
        console.log('failed', err);
        res.status(400).json(err);
      });
  });
}