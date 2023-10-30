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

# To-Do-List

Written and co-authored by: 
Aaron Mejia: <aaron@mejia.dev>
Nikkita Torres: <nikkitatorres@yahoo.com>

## Description
This is a project to produce a basic to do list, with the functionality to "cross off" an item, or simply delete it.

## Technologies Used:

* HTML
* CSS
* JavaScript

## Setup Instructions:

1. Clone [this](https://github.com/NikkitaTorres/To-Do-List.git) repository to your desktop
2. Navigate to the top level of the directory.
3. Open index.html in your browser.
4. Add items to your to do list one at a time by filling in the blank form and clicking "Add new Item to list"
5. Once you finish a item, you can select the item and click "Done" to indicate the task is finished, or click "Remove this item" to delete it from the to do list.

## Known Bugs:

Known bugs includes: 

* Currently can only remove 1 item at a time. If 2 items have the same name, only the top item will be removed.

## License

[MIT](LICENSE.txt)

Copyright (c) 2023 Aaron Mejia and Nikkita Torres