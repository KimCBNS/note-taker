const router = require('express').Router();
const store = require('../db/store');


// GET datafile  localhost:3001/api/notes
router.get('/notes', (req, res) =>
store
.getNotes()
.then((notes) => {
  return res.json(notes)
})
.catch((err) => res.status(500).json(err))
);

// POSTRoute for index page localhost:3001/api/notes
router.post('/notes', (req, res) =>
  console.log('hello')

);


module.exports = router;