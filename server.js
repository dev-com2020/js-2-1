const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { register } = require('module');
const { error } = require('console');

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
});

const Squad = mongoose.model('Squad', SquadSchema);

app.get('/',(req,res) => {
    res.send("Witaj w Express.js z MongoDB!")
});
app.listen(PORT, ()=>{
    console.log("Serwer OK!")
});

// zapytania
app.post('/add', async (req,res) => {
    try {
        const newSquad = new Squad(req.body);
        const savedSquad = await newSquad.save();
        res.status(201).json(savedSquad);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
});