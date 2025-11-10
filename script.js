const input = document.getElementById("searchBar");
const fileContent = document.getElementById("fileContent");
const loadBtn = document.getElementById("loadBtn");
const paragraphs = document.querySelectorAll(".paragraphItem");

const fileMap = {
  "purpose of the project": "data/1.txt",
  "establishing the framework": "data/2.txt",
  "history of the netherlands": "data/3.txt",
  "user experience in art": "data/4.txt",
  "ai behavior and accuracy": "data/5.txt",
  "handling uncertain information": "data/6.txt",
  "strengths and weaknesses": "data/7.txt",
  "identified enhancements": "data/8.txt",
  "personalizing the experience": "data/9.txt",
  "overall findings": "data/10.txt",
  "1. purpose of the project": "data/1.txt",
  "2. establishing the framework": "data/2.txt",
  "3. history of the netherlands": "data/3.txt",
  "4. user experience in art": "data/4.txt",
  "5. ai behavior and accuracy": "data/5.txt",
  "6. handling uncertain information": "data/6.txt",
  "7. strengths and weaknesses": "data/7.txt",
  "8. identified enhancements": "data/8.txt",
  "9. personalizing the experience": "data/9.txt",
  "10. overall findings": "data/10.txt"
};

function loadFile() {
  const userInput = input.value.trim().toLowerCase();
  let filePath = "";

  if (!isNaN(userInput) && userInput !== "") {
    const num = parseInt(userInput);
    if (num >= 1 && num <= 10) {
      filePath = `data/${num}.txt`;
    }
  }
  else if (fileMap[userInput]) {
    filePath = fileMap[userInput];
  }

  if (!filePath) {
    fileContent.textContent = "No matching file found.";
    return;
  }

  fetch(filePath)
    .then(res => {
      if (!res.ok) throw new Error("File not found");
      return res.text();
    })
    .then(data => (fileContent.textContent = data))
    .catch(err => {
      fileContent.textContent = "File not found or error loading file.";
      console.error(err);
    });
}
paragraphs.forEach(item => {
  item.addEventListener("click", () => {
    input.value = item.textContent.trim();
    input.focus();
    loadFile();
  });
});

loadBtn.addEventListener("click", loadFile);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    loadFile();
  }
});