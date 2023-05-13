const form = document.querySelector("form");
const todoList = document.querySelector("#todo-list");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const newTaskInput = document.querySelector("#task");
  const newToDo= document.createElement("li");
  const newButton = document.createElement("button");
  const newCheckbox = document.createElement("INPUT");
  newCheckbox.setAttribute("type", "checkbox");
  newToDo.innerText = newTaskInput.value;
  newButton.innerText = "Remove";

  newButton.addEventListener("click", function(event) {
    event.target.parentElement.remove();
  });

  newToDo.append(newCheckbox);
  newToDo.append(newButton);
  todoList.append(newToDo);
  form.reset();
 
  todoList.addEventListener("click", function(event) {
    const targetTagToLowerCase = event.target.tagName.toLowerCase();
    if (targetTagToLowerCase === "li") {
      event.target.style.textDecoration = "line-through";
    } else if (targetTagToLowerCase === "button") {
      event.target.parentNode.remove();
    }
  });
  

});

