const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/superheroes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log('Połączono!');
}).catch((err) => {
    console.error('Błąd połączenia!', err);
});

const SquadSchema = new mongoose.Schema({
  squadName: String,
  homeTown: String,
  formed: Number,
  secretBase: String,
  active: Boolean,
  members: [
    {
      name: String,
      age: Number,
      secretIdentity: String,
      powers: [String],
    },
  ],
})

