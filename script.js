const input = document.getElementById("searchBar");
const fileContent = document.getElementById("fileContent");
const loadBtn = document.getElementById("loadBtn");

function loadFile() {
  const fileNumber = input.value.trim();
  switch (fileNumber) {
    case "Purpose of the Project":
        
  }
  if (fileNumber === "") {
    fileContent.textContent = "";
    return;
  }

  const filePath = `data/${fileNumber}.txt`;

  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error("File not found");
      return response.text();
    })
    .then(data => {
      fileContent.textContent = data;
    })
    .catch(err => {
      fileContent.textContent = "❌ File not found or error loading file.";
      console.error(err);
    });
}

loadBtn.addEventListener("click", loadFile);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    loadFile();
  }
});