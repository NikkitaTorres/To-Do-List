Describe: ToDoList

Test: "It is the constructor for a new To Do List"
Code: ToDoList()
Expected Output: {}


Describe: ToDoList.prototype.addItem

Test: "It will add an item to the To Do List"
Code: ToDoList.prototype.addItem("task")
Expected Output: {"task"}


Describe: ToDoList.prototype.deleteItem

Test: "It will remove an item from the To Do List"
Code: ToDoList.prototype.deleteItem("task")
Expected Output: {-"task"}