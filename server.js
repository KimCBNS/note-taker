const express = require('express');

const apiRoutes = require('./routes/APIroutes.js');
const htmlRoutes = require('./routes/HTMLroutes.js');

const PORT = process.env.PORT || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));  // always before routes

// localhost:3001/api
app.use('/api', apiRoutes);

// localhost:3001/
app.use('/', htmlRoutes);




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
