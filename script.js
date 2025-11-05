document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        
    }
});
fetch("data/1.txt")
    .then((res) => res.text())
    .then((text) => {
        document.getElementById("fileContent").textContent = text;
    })
