const router = require('express').Router();
const path = require('path');


// GET Route for notes.html   localhost:3001/api/notes
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route for index page localhost:3001/ (landing page)
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;