// Your code goes here
// Wait until the DOM is fully loaded before running any code
document.addEventListener("DOMContentLoaded", () => {
  // Select the paragraph with id="text"
  const paragraph = document.getElementById("text");

  // Update its content using textContent
  paragraph.textContent = "This is really cool!";
});

// This line runs immediately, before DOMContentLoaded
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
