const display = document.getElementById("calc-display")
const buttons = document.querySelectorAll(".buttons button");
const dragElement = document.getElementById("drag");
const toggleDragBtn = document.getElementById("toggle-drag");

let isDragging = false;
let isLocked = false;
let offsetX, offsetY;

// Handle calculator button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (!value) return;

    if (value === "=") {
      try {
        display.value = math.evaluate(display.value);
      } catch {// Get main calculator display and buttons
const display = document.getElementById("calc-display");
const buttons = document.querySelectorAll(".buttons button");

// Drag and lock elements
const dragElement = document.getElementById("drag");
const toggleDragBtn = document.getElementById("toggle-drag");

let isDragging = false;
let isLocked = false;
let offsetX, offsetY;

// Handle button clicks for calculator
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value"); // Get button's value

    if (!value) return;

    if (value === "=") {
      // Try to evaluate the expression
      try {
        display.value = math.evaluate(display.value);
      } catch {
        display.value = "Error"; // Show error if expression is invalid
      }
    } else if (value === "C") {
      // Clear display
      display.value = "";
    } else {
      // Add clicked value to display
      display.value += value;
    }
  });
});

// Enable dragging
dragElement.addEventListener("mousedown", function (e) {
  if (isLocked) return;
  isDragging = true;
  offsetX = e.clientX - dragElement.offsetLeft;
  offsetY = e.clientY - dragElement.offsetTop;
});

// Move calculator while dragging
document.addEventListener("mousemove", function (e) {
  if (isDragging && !isLocked) {
    dragElement.style.left = `${e.clientX - offsetX}px`;
    dragElement.style.top = `${e.clientY - offsetY}px`;
  }
});

// Stop dragging when mouse is released
document.addEventListener("mouseup", function () {
  isDragging = false;
});

// Toggle lock/unlock for dragging
toggleDragBtn.addEventListener("click", () => {
  isLocked = !isLocked;
  toggleDragBtn.textContent = isLocked ? "🔓 Unlock" : "🔒 Lock";
});

// Update display size based on input length
function updateDisplay(value) {
  display.value = value;
  display.style.height = "auto";
  display.style.height = display.scrollHeight + "px";
}

// Array to store history of submitted entries
let array1 = [];

const submitted = document.querySelector('#submit');
const display2 = document.querySelector('#input');

// On submit, save the current amount, note, and date
submitted.addEventListener('click', function () {
  const obj = {
    amount: display.value,
    note: display2.value,
    date: new Date().toLocaleDateString()
  };

  array1.push(obj); // Add object to array

  array1.forEach(item => {
    console.log(item); // Show all entries in console
  });
});

// Show full history on click
const history = document.querySelector('#show-history');
const listHistory = document.querySelector('#list-history');

history.addEventListener('click', function () {
  listHistory.innerHTML = ""; // Clear previous content

  array1.forEach(item => {
    listHistory.innerHTML += `<div>${item.amount} : ${item.note} : ${item.date}</div>`;
  });
});

// Filter and display entries based on selected date
document.querySelector('#date').addEventListener('change', () => {
  const selectedDate = document.querySelector('#date').value;
  const filtered = array1.filter(item => item.date === selectedDate);

  listHistory.innerHTML = ""; // Clear current list

  filtered.forEach(item => {
    listHistory.innerHTML += `<div>${item.amount} : ${item.note} : ${item.date}</div>`;
  });
});

// Clear all history when delete button is clicked
const delHistory = document.querySelector('#delete-history');
const deleteHistory = function () {
  array1.length = 0; // Clear array
  listHistory.innerHTML = ""; // Clear displayed list
};

        display.value = "Error";
      }
    } else if (value === "C") {
      display.value = "";
    } else {
      display.value += value;
    }
  });
});

// Dragging functionality
dragElement.addEventListener("mousedown", function (e) {
  if (isLocked) return;

  isDragging = true;
  offsetX = e.clientX - dragElement.offsetLeft;
  offsetY = e.clientY - dragElement.offsetTop;
});

document.addEventListener("mousemove", function (e) {
  if (isDragging && !isLocked) {
    dragElement.style.left = `${e.clientX - offsetX}px`;
    dragElement.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", function () {
  isDragging = false;
});

// Lock / Unlock Drag Toggle
toggleDragBtn.addEventListener("click", () => {
  isLocked = !isLocked;
  toggleDragBtn.textContent = isLocked ? "🔓 Unlock" : "🔒 Lock";
});

function updateDisplay(value) {
  display.value = value;
  display.style.height = "auto";               // reset first
  display.style.height = display.scrollHeight + "px";  // resize based on content
}

let array1 = [];

const submitted = document.querySelector('#submit')
const display2 = document.querySelector('#input')

const date = new Date();
submitted.addEventListener('click',function submit(e){
const obj = {
  amount: display.value,
  note: display2.value,
  date: new Date().toLocaleDateString()
}

array1.push(obj);


  
array1.forEach(item =>{
  console.log(item)
})
});

const history = document.querySelector('#show-history');
history.addEventListener('click', () => {
  renderHistory(array1);
});

const listHistory  = document.querySelector('#list-history')
function Display(){
  listHistory.innerHTML += obj;
}


const change = document.querySelector('#date').addEventListener('change', () => {
  const selectedDate = document.querySelector('#date').value;

  const filtered = array1.filter(item => item.date === selectedDate);

  listHistory.innerHTML = ""; // clear previous list

  filtered.forEach(item => {
    listHistory.innerHTML = `<div> NEW ITEM </div>` + listHistory.innerHTML;
  });
});

const delHistory = document.querySelector('#delete-history')
.addEventListener('click',() =>{
 const confirmDelete = confirm("Delete all history?");
  if (confirmDelete) {
    array1 = [];
    listHistory.innerHTML = "";
  }
});

function renderHistory(entries) {
  listHistory.innerHTML = "";  // clear previous
  entries.forEach(item => {
    listHistory.innerHTML += `<div>${item.amount} : ${item.note} : ${item.date}</div>`;
  });
}


