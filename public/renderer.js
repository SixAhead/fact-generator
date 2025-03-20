function getFact() {
    fetch("https://fact-generator-3um1.onrender.com/fact")  // ✅ Use the live server URL
        .then(response => response.json())
        .then(data => {
            document.getElementById("fact").innerText = data.fact;
        })
        .catch(error => console.error("Error fetching fact:", error));
}
