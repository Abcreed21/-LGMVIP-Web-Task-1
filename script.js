let todoList = document.getElementById("todoList");
let todoInput = document.getElementById("todoInput");

function addTodo() {
  let todoText = todoInput.value;

  if (todoText.trim() === "") {
    alert("Please enter a valid task");
    return;
  }

  let todoItem = document.createElement("li");
  todoItem.innerText = todoText;

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.onclick = function () {
    todoItem.remove();
  };

  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);

  todoInput.value = "";
}