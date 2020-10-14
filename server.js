const express = require('express');
const mongoose = require('mongoose');
// set port for heroku
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// routes
require('./routes/apiRoute')(app);
require('./routes/htmlRoute')(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: true
});

// listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
