// Get references to the open and close buttons and the text box container
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const textBoxContainer = document.getElementById("textBoxContainer");

// Add a click event listener to the open button
openButton.addEventListener("click", () => {
    textBoxContainer.classList.remove("hidden");
});

// Add a click event listener to the close button
closeButton.addEventListener("click", () => {
    textBoxContainer.classList.add("hidden");
});