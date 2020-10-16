// path to point the directory to the file
const path = require('path');

module.exports = (app) => {
  // router for the index.html
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
  // router for the  exercise page
  app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });
  // router for the stats page
  app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  });
};
