import * as fs from 'fs';

const FACTS_FILE = "Facts.json";

// Load facts from Facts.json
function loadFacts(): string[] {
    if (!fs.existsSync(FACTS_FILE)) {
        console.error("❌ Facts.json not found!");
        process.exit(1);
    }

    const facts = JSON.parse(fs.readFileSync(FACTS_FILE, "utf-8"));
    return facts;
}

// Get a random fact
function getRandomFact(facts: string[]): string {
    return facts[Math.floor(Math.random() * facts.length)];
}

// Get a fact by number
function getFactByNumber(facts: string[], number: number): string {
    if (number >= 0 && number < facts.length) {
        return facts[number];
    } else {
        return `❌ Invalid number! Pick a number between 0 and ${facts.length - 1}`;
    }
}

// Run the program
const facts = loadFacts();
console.log("💡 Type 'random' for a random fact or enter a number to get a specific fact!");

process.stdin.on("data", (input) => {
    const choice = input.toString().trim();

    if (choice.toLowerCase() === "random") {
        console.log("🔹", getRandomFact(facts));
    } else if (!isNaN(Number(choice))) {
        console.log("🔹", getFactByNumber(facts, Number(choice)));
    } else {
        console.log("❌ Invalid input. Try again!");
    }
});
