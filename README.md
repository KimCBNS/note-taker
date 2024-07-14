# Express.js Challenge: Note Taker

## Description

This application is a simple note-taking app that allows users to write, save, and delete notes. It is built with Express.js for the back end and uses a JSON file to store notes.

## User Story

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete


## Acceptance Criteria

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository: git@github.com:KimCBNS/note-taker.git
   
Navigate to the project directory:

Install the necessary dependencies:

npm install
Start the server:
npm start
Open your web browser and go to http://localhost:3001.
Routes
HTML Routes
GET /notes - Returns the notes.html file.
GET * - Returns the index.html file.
API Routes
GET /api/notes - Reads the db.json file and returns all saved notes as JSON.
POST /api/notes - Receives a new note to save on the request body, adds it to the db.json file, and returns the new note to the client.

Built With
Express.js
Node.js
uuid

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
The initial front-end code was provided as part of the challenge.
Thanks to the contributors and the open-source community for their support and tools. The support of the UofT tutoring team and ChatGPT were instrumental in completing this task.


### Notes:

The application has been deployed using Render.

For information or to chat about this project reach out to Kim Desveaux https://github.com/KimCBNS
on Instagram at https://www.instagram.com/kim_desveaux/









