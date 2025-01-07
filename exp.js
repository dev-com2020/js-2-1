const express = require('express');
const app = express();

// middleware
app.use(express.json());

// routing
app.get('/',(req,res) => {
    res.send("Witaj w Express.js!")
});

app.post('/data', (req,res) => {
    const data = req.body;
    res.json({message: "Dane odebrane!", data})
})
// start servera
app.listen(3000, ()=>{
    console.log("Serwer OK!")
})