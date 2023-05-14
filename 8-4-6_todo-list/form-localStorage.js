const todoForm = document.getElementById("newTodoForm");
const todoList = document.getElementById("todoList");

// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newToDo = document.createElement("li");
  newToDo.innerText = savedTodos[i].task;
  newToDo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  todoList.appendChild(newTodo);
}

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let newTodo = document.createElement("li");
  let taskValue = document.getElementById("task").value;
  newToDo.innerText = taskValue;
  newToDo.isCompleted = false;
  todoForm.reset();
  todoList.appendChild(newToDo);

  // save to localStorage
  for (let i = 0; i < savedTodos.length; i++) {
    if (savedTodos[i].task === clickedListItem.innerText) {
      savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
      localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
  }
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
