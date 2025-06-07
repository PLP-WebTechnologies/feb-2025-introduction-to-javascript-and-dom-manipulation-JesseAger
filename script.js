
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("main-title").textContent = "You Changed the Title!";
});

document.getElementById("changeStyleBtn").addEventListener("click", () => {
  const text = document.getElementById("text");
  text.style.color = "white";
  text.style.backgroundColor = "teal";
  text.style.padding = "10px";
});

document.getElementById("addElementBtn").addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = "I'm a new paragraph added to the DOM.";
  newPara.id = "dynamic-paragraph";
  document.getElementById("dynamic-container").appendChild(newPara);
});

document.getElementById("removeElementBtn").addEventListener("click", () => {
  const para = document.getElementById("dynamic-paragraph");
  if (para) {
    para.remove();
  }
});
