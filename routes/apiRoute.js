const db = require('../models');

module.exports = (app) => {
  app.get('/api/workouts', (req, res) => {
    db.Workout.find({}).then(workouts => {
      res.json(workouts);
    });
  });
}