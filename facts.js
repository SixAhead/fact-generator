"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var FACTS_FILE = "Facts.json";
// Load facts from Facts.json
function loadFacts() {
    if (!fs.existsSync(FACTS_FILE)) {
        console.error("❌ Facts.json not found!");
        process.exit(1);
    }
    var facts = JSON.parse(fs.readFileSync(FACTS_FILE, "utf-8"));
    return facts;
}
// Get a random fact
function getRandomFact(facts) {
    return facts[Math.floor(Math.random() * facts.length)];
}
// Get a fact by number
function getFactByNumber(facts, number) {
    if (number >= 0 && number < facts.length) {
        return facts[number];
    }
    else {
        return "\u274C Invalid number! Pick a number between 0 and ".concat(facts.length - 1);
    }
}
// Run the program
var facts = loadFacts();
console.log("💡 Type 'random' for a random fact or enter a number to get a specific fact!");
process.stdin.on("data", function (input) {
    var choice = input.toString().trim();
    if (choice.toLowerCase() === "random") {
        console.log("🔹", getRandomFact(facts));
    }
    else if (!isNaN(Number(choice))) {
        console.log("🔹", getFactByNumber(facts, Number(choice)));
    }
    else {
        console.log("❌ Invalid input. Try again!");
    }
});
