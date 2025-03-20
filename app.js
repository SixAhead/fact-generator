const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const path = require("path");


const FACTS_FILE = path.join(__dirname, "Facts.json");


// Debugging: Print out where it's looking for Facts.json
console.log("Looking for Facts.json at:", FACTS_FILE);

function loadFacts() {
    if (!fs.existsSync(FACTS_FILE)){
        return["ooops, no facts available!"];
    }
    return JSON.parse(fs.readFileSync(FACTS_FILE, "utf-8"));

}
app.whenReady().then(() => {
    const path = require('path');

const win = new BrowserWindow({
    width: 500,
    height: 300,
    icon: path.join(__dirname, 'icon.ico'), // ✅ Ensures Windows keeps the icon
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }
});


    win.loadFile('index.html');
const facts = loadFacts();

ipcMain.on("get-fact", (event) => {
    const randomfact = facts[Math.floor(Math.random() * facts.length)];
    event.reply("fact-response", randomfact);
   });

});   
