const todoForm = document.querySelector("#todo-form");
const todoText = todoForm.querySelector("input");
const todoList = document.querySelector("ul");
const submitButton = todoForm.querySelector("button");

function addTodo(event) {
    event.preventDefault();
    const li = document.createElement("li");
    const todoContent = todoText.value;
    const todoSpan = document.createElement("span");
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.addEventListener("click", deleteToDos);
    todoSpan.innerText = todoContent;

    li.appendChild(deleteButton);
    li.appendChild(todoSpan);
    todoList.appendChild(li);

    todoText.value = "";

}

function deleteToDos(event) {
  const li = event.target.parentElement;
  li.remove();
}

todoForm.addEventListener("submit", addTodo);
