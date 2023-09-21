//your code here
// Store references to the divs and their initial backgrounds
const divs = document.querySelectorAll('.image');
let initialBackgrounds = [];

// Initialize the initial backgrounds array
divs.forEach((div) => {
  initialBackgrounds.push(getComputedStyle(div).backgroundImage);
});

// Function to handle drag start
function handleDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

// Function to handle drag over
function handleDragOver(event) {
  event.preventDefault();
}

// Function to handle drop
function handleDrop(event) {
  event.preventDefault();
  const sourceId = event.dataTransfer.getData('text/plain');
  const targetId = event.target.id;

  // Swap backgrounds of the source and target divs
  const sourceIndex = sourceId.slice(-1) - 1;
  const targetIndex = targetId.slice(-1) - 1;
  divs[sourceIndex].style.backgroundImage = getComputedStyle(divs[targetIndex]).backgroundImage;
  divs[targetIndex].style.backgroundImage = initialBackgrounds[sourceIndex];
}

// Add event listeners for drag-and-drop functionality
divs.forEach((div) => {
  div.addEventListener('dragstart', handleDragStart);
  div.addEventListener('dragover', handleDragOver);
  div.addEventListener('drop', handleDrop);
});

