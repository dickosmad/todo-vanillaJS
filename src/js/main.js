const todoItems = document.getElementById("todo_items");
const todoInput = document.getElementById("todo_input");
const noTodos = document.getElementById("no_todos");
todoInput.addEventListener("keyup", addTodo);
todoItems.addEventListener("click", removeTodo);

function addTodo(evt) {
  const todo = todoInput.value;
  const li = document.createElement("li");
  li.classList.add("todo_item");
  const p = document.createElement("p");
  p.classList.add("todo_text");
  p.innerText = todo;
  const btn = document.createElement("button");
  btn.classList.add("btn_close");
  btn.innerText = "X";
  li.appendChild(p);
  li.appendChild(btn);

  if (evt.key === "Enter") {
    noTodos.style.display = "none";
    if (todo === "") {
      alert("Please add a new todo");
    }
    todoItems.appendChild(li);
    todoInput.value = "";
  }
}

function removeTodo(evt) {
  if (evt.target.classList.contains("btn_close")) {
    evt.target.parentElement.remove();
    if (todoItems.children.length === 1) {
      noTodos.style.display = "block";
    }
  }
}
