let draggableLists = document.getElementById("draggable-list");
let check = document.getElementById("check");

const people = [
  "Elon R Musk",
  "Bernard Arnault & family",
  "Jeff Bezos",
  "Bill Gate",
  "Larry Page",
  "Warren Buffett",
  "Mark Zuckerberg",
  "Sergey Brin",
  "Larry Ellison",
  "Steve Ballmer",
];

let listItems = [];

setItem();

function setItem() {
  [...people]
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => b.sort - a.sort)
    .map(({ val }) => val)
    .forEach((person, index) => {
      let li = document.createElement("li");
      // li.classList("list-item");
      // li.setAttribute("data-index", index);
      // <i class="fas fa-grip-lines"></i>;

      li.innerHTML = `
                    <span class="number">${index + 1}</span>
                    <div class="draggable" draggable="true" id="${index + 1}">
                      <p id="p${person}">${person}</p>
                      <i id="i${person}" class="fas fa-grip-lines"></i>
                    </div>
                  `;
      listItems.push(li);
      draggableLists.appendChild(li);
    });
  addEventListeners();
}

// console.log(document.getElementsByClassName("draggable"));

let dragData;
let dragContent;

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
  dragData = e.dataTransfer.getData("text");

  dragContent = document.getElementById(dragData).innerHTML;
}

// console.log(document.getElementById(1).parentNode);

function over(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  if (e.target.className == "draggable") {
    var dropPosition = document.getElementById(e.target.id);
    var dropPositionContent = dropPosition.innerHTML;
  } else {
    var dropPosition = document.getElementById(e.target.id).parentNode;
    var dropPositionContent = dropPosition.innerHTML;
  }
  document.getElementById(dragData).innerHTML = dropPositionContent;
  dropPosition.innerHTML = dragContent;
}

function addEventListeners() {
  listItems.forEach((draggedItem) =>
    draggedItem.addEventListener("dragstart", drag)
  );

  listItems.forEach((draggedItem) =>
    draggedItem.addEventListener("dragover", over)
  );

  listItems.forEach((draggedItem) =>
    draggedItem.addEventListener("drop", drop)
  );
}

function checkResult() {
  let scoreElement = document.getElementById("score");
  let score = 0;
  let currentList = listItems.map(
    (listItem) => listItem.lastElementChild.innerText
  );
  for (let i = 0; i < people.length; i++) {
    if (currentList[i] == people[i]) {
      document.getElementById(i + 1).style.color = "green";
      score++;
    } else {
      document.getElementById(i + 1).style.color = "red";
    }
  }
  scoreElement.innerText = `Score: ${score}/10`;
  score > 4
    ? (scoreElement.style.color = "green")
    : (scoreElement.style.color = "red");
}

check.addEventListener("click", checkResult);

// Mukesh Ambani
// Gautam Adani & Family
// Francoise Bettencourt Meyers and Family
// Carlos Slim Helu and family
// Mark Zuckerberg Zhong Shanshan
// Michael Bloomberg
// Amancio Ortega
// Jim Walton
// Alice Walton
// Rob Walton
