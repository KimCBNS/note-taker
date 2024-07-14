// heavy lifting file
const fs = require('fs')
const util = require('util')  // read about utils
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // Importing the v4 method from uuid


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


  // This method will read the existing notes, add a new note with a unique ID, and then write the updated notes back to the JSON file.
  addNote(note) {
    // first get the new note ready
    const { title, text } = note;
    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }

    const newNote = {
      id: uuidv4(),
      title,
      text
    };
 // then get all the notes and add the new note and return the new list
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }

}

module.exports = new Store(); // Export an instance of the Store class


 

