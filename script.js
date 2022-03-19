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
  if (listItems.length > 0) {
    console.log("Calling...");
  }
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
    <p id=p${index + 1}>${person}</p>
    </div>
    `;
      listItems.push(li);
      draggableLists.appendChild(li);
    });
  console.log(
    "beginning",
    listItems.map((listItem) => listItem.lastElementChild.innerText)
  );
}

function checkResult() {
  let currentList = listItems.map(
    (listItem) => listItem.lastElementChild.innerText
  );
  for (let i = 0; i < people.length; i++) {
    if (currentList[i] == people[i]) {
      document.getElementById(i + 1).style.color = "green";
    } else {
      document.getElementById(i + 1).style.color = "red";
    }
  }
}

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

let dragData;
let dragContent;
document.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text", e.target.id);
  dragData = "p" + e.dataTransfer.getData("text");
  // dragContent = document.getElementById(dragData).innerHTML;
  dragContent = document.getElementById(dragData).innerHTML;
  // console.log(dragContent, dragData);
  console.log(
    "drag",
    listItems.map((listItem) => listItem.lastElementChild.innerText)
  );
});
document.addEventListener("dragover", (e) => {
  e.preventDefault();
});
document.addEventListener("drop", (e) => {
  e.preventDefault();
  // console.log("drop", e.target.id);

  // console.log(document.getElementById(e.target.id).innerHTML);
  let dropPositionContent = document.getElementById(e.target.id).innerHTML;

  document.getElementById(dragData).innerHTML = dropPositionContent;
  document.getElementById(e.target.id).innerHTML = dragContent;
  // console.log(listItems.map((listItem) => listItem.innerText));
});

check.addEventListener("click", checkResult);
