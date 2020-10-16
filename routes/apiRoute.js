const db = require('../models');

module.exports = (app) => {
  app.get('/api/workouts', async (req, res) => {
    await db.Workout.find({}).then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      console.log('failed', err);
      res.status(400).json(err);
    });
  });
  app.get('/api/workouts/range', async (req, res) => {
    await db.Workout.find({}).then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      console.log('failed', err);
      res.status(400).json(err);
    });
  });
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
  app.put('/api/workouts/:id', async ({body, params}, res) => {
    console.log(body, params.id);
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