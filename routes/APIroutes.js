const router = require('express').Router();
const store = require('../db/store');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // Importing the v4 method from uuid

// GET datafile  localhost:3001/api/notes
router.get('/notes', (req, res) =>
store
.getNotes()
.then((notes) => {
  return res.json(notes)
})
.catch((err) => res.status(500).json(err))
);

// POST Route for index page localhost:3001/api/notes
router.post('/notes', (req, res) => {
  const newNote = req.body; // Get the note data from the request body
  store
    .addNote(newNote)
    .then((note) => {
      return res.json(note);
    })
    .catch((err) => res.status(500).json(err));
});


module.exports = router;