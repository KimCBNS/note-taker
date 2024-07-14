// heavy lifting file
const fs = require('fs')
const util = require('util')  // read about utils

// look up uuid (install and copy as listed in class activity)

const readFileDisplay = util.promisify(fs.readFile);
const writeFileDisplay = util.promisify(fs.writeFile);

// create a class / methods in a class object
class Store {
  read() {
    return readFileDisplay('db/db.json', "utf-8")
  }

  write(note) {
    return writeFileDisplay('db/db.json', JSON.stringify(note))
  }

  getNotes() {
    return this.read().then((notes) => {
      let displayNotes;
      try {
        displayNotes = [].concat(JSON.parse(notes))
      } catch (err) {
        displayNotes = [];
      } 
      return displayNotes;
    })
  }

  addNote(note) {
    // pass a note through
    // define a note and run a rule (if) ? how does a person add a note. can't be empty, etc
    // define a new note with a uuid and data ... deconstruct (title, text)
    // so you can use it 
    // define a newNote: Add a unique id to the note using uuid package
  

    // Get all notes, add the new note, write all the updated notes, return the newNote
    // do the return to the data
    // get the note and chain together
    // esport as a new store
    
  }
}

module.exports = new Store(); // Export an instance of the Store class