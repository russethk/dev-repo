document.addEventListener("DOMContentLoaded", function() {

  const todoForm = document.getElementById("newTodoForm");
  const todoList = document.getElementById("todoList");

  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  for (let i = 0; i < savedTodos.length; i++) {
    let newToDo = document.createElement("li");
    newToDo.innerText = savedTodos[i].task;
    newToDo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newToDo.isCompleted) {
    newToDo.style.textDecoration = "line-through";
  }
  todoList.appendChild(newToDo);
  }

  todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let newToDo = document.createElement("li");
    let taskValue = document.getElementById("task").value;
    newToDo.innerText = taskValue;
    newToDo.isCompleted = false;
    todoForm.reset();
    todoList.appendChild(newToDo);

    // save to localStorage
   savedTodos.push({ task: newToDo.innerText, isCompleted: false });
   localStorage.setItem("todos", JSON.stringify(savedTodos));
  });

  todoList.addEventListener("click", function(event) {
    let clickedListItem = event.target;

    if (!clickedListItem.isCompleted) {
      clickedListItem.style.textDecoration = "line-through";
      clickedListItem.isCompleted = true;
    } else {
      clickedListItem.style.textDecoration = "none";
      clickedListItem.isCompleted = false;
    }
  });

});

