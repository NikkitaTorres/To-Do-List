// To Do List Business Logic
function ToDoList() {
  this.toDo = {};
}

ToDoList.prototype.addItem = function(item) {
  this.toDo[item] = item;
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
    let removedLabel = document.querySelector('label[for="' + adjustedSelection + '"]');//removes first selected item only, will not remove another selceted item
    let toDoListForm = document.getElementById("toDoListForm");
    removedLabel.parentElement.removeChild(removedLabel);
    removedInput.parentElement.removeChild(removedInput);
  });
  if (myToDoList.toDo.length < 1) {
    hideResultsDiv();
  }
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
})

