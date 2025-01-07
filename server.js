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

// db.getCollection('squads').find(
//     {},
//     { squadName: 1, _id: 0 }
//   );
app.get('/squads', async (req,res) => {
    try {
        const squads = await Squad.find({});
        res.json(squads)
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});
app.get('/squads/names', async (req,res) => {
    try {
        const squads = await Squad.find({},{ squadName: 1, _id: 0 });
        res.json(squads)
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// db.getCollection('squads').find(
//     { 'members.powers': 'Damage resistance' },
//     { 'members.$': 1 }
//   );
app.get('/squads/power1', async (req,res) => {
    try {
        const power = req.params.power;
        const squads = await Squad.find({'members.powers': 'Damage resistance'},{ 'members.$': 1, _id: 0 });
        res.json(squads)
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});
app.get('/squads/by-power/:power', async (req,res) => {
    try {
        const power = req.params.power;
        const squads = await Squad.find({'members.powers': power},{ 'members.$': 1, _id: 0 });
        res.json(squads)
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});
app.delete('/squads/:id', async (req,res) => {
    try {
        const deleteSquad = await Squad.findByIdAndDelete(req.params.id)
        if (!deleteSquad) return res.status(404).json({error: "Nie znaleziono"})
        res.json(deleteSquad)
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

app.put('/squads/:id', async (req,res) => {
    try {
        const updateSquad = await Squad.findByIdAndUpdate(req.params.id, req.body, 
            {new: true}
        )
        if (!updateSquad) return res.status(404).json({error: "Nie znaleziono"})
        res.json(updateSquad)
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});
