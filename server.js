const express = require('express');
const app  = express();
const path = require("path");
const fs = require('fs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/fact', (req, res)=> {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    res.json({ fact: randomFact});
});
const facts = JSON.parse(fs.readFileSync('Facts.json', 'utf-8'));

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => {
    console.log (` Server is running away...get it!! http://localhost:${PORT}`);

});


