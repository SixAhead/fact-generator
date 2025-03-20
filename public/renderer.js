function getFact() {
    fetch("http://localhost:3000/fact") // Fetch a fact from the server
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            document.getElementById("fact").innerText = data.fact; // Update the page with the fact
        })
        .catch(error => console.error("Error fetching fact:", error)); // Handle errors
}
