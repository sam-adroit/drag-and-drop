let dragData;
let dragContent;
document.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text", e.target.id);
  dragData = "p" + e.dataTransfer.getData("text");

  dragContent = document.getElementById(dragData).innerHTML;

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

  let dropPositionContent = document.getElementById(e.target.id).innerHTML;

  document.getElementById(dragData).innerHTML = dropPositionContent;
  document.getElementById(e.target.id).innerHTML = dragContent;
});
