// To Do List Business Logic
function ToDoList() {
  this.toDo = {};
  this.currentId = 0;
}

ToDoList.prototype.addItem = function(item) {
  item.id = this.assignId();
  this.toDo[item.id] = item;
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

ToDoList.prototype.deleteItem = function(item) {
  if (this.toDo[item] === undefined) {
    return "Item does not exist";
  } else {
    delete this.toDo[item];
  }
}

// Create myToDoList
let myToDoList = new ToDoList;


// UI Logic
function addItemToList() {
  event.preventDefault()
  const inputText = document.getElementById("inputText").value;
  myToDoList.addItem(inputText);
  let newItemLabel = document.createElement("label")
  newItemLabel.setAttribute("for",inputText);
  newItemLabel.innerText = inputText;
  let newItemCheckbox = document.createElement("input");
  newItemCheckbox.setAttribute("type","checkbox");
  newItemCheckbox.setAttribute("name",inputText);
  newItemCheckbox.setAttribute("id",inputText);
  newItemCheckbox.setAttribute("value",inputText);
  let toDoListForm = document.getElementById("toDoListForm");
  toDoListForm.prepend(document.createElement("br"));
  toDoListForm.prepend(newItemLabel);
  toDoListForm.prepend(newItemCheckbox);
  showResultsDiv();
}

function removeItemFromList() {
  event.preventDefault()
  const removalSelection = document.querySelectorAll("input:checked");
  const removalSelectionArray = Array.from(removalSelection);
  removalSelectionArray.forEach(function(selection) {
    let adjustedSelection = selection.value;
    myToDoList.deleteItem(adjustedSelection);
    let removedInput = document.querySelector("input#" + adjustedSelection);
    let removedLabel = document.querySelector('label[for="' + adjustedSelection + '"]'); //removes first selected item only, will not remove another selceted item
    let toDoListForm = document.getElementById("toDoListForm");
    removedLabel.parentElement.removeChild(removedLabel);
    removedInput.parentElement.removeChild(removedInput);
  });
  if (myToDoList.toDo.length < 1) {
    hideResultsDiv();
  }
}

function markDone() {
  event.preventDefault()
  const doneSelection = document.querySelectorAll("input:checked");
  const doneSelectionArray = Array.from(doneSelection);
  doneSelectionArray.forEach(function(selection) {
    let adjustedSelection = selection.value;
    let doneLabel = document.querySelector('label[for="' + adjustedSelection + '"]'); //targets first selected item only, will not target another selceted item
    doneLabel.innerHTML = "<span class=markedDone>" + adjustedSelection + "</span>";
  });
}

function showResultsDiv() {
  const resultsDiv = document.getElementById("resultsDiv");
  resultsDiv.removeAttribute("class");
}

function hideResultsDiv() {
  const resultsDiv = document.getElementById("resultsDiv");
  resultsDiv.setAttribute("class","hidden");
}

window.addEventListener("load", function() {
  this.document.getElementById("inputForm").addEventListener("submit", addItemToList);
  this.document.getElementById("removeButton").addEventListener("click", removeItemFromList);
  this.document.getElementById("doneButton").addEventListener("click", markDone)
})

