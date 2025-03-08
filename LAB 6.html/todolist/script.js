const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

let todos = [];

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0 && todoText.length <= 50) {  // Check if the text is within 50 characters
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };

    todos.push(todo);
    todoInput.value = "";
    renderTodos();
  } else {
    alert("Please enter a task with no more than 50 characters.");
  }
}

function deleteTodo(id) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (confirmDelete) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
  }
}

function toggleCompleted(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    const todoText = document.createElement("span");
    const todoDeleteButton = document.createElement("button");
    const myCheck = document.createElement("INPUT");
    myCheck.setAttribute("type", "checkbox");

    todoText.textContent = todo.text;
    todoDeleteButton.textContent = "Delete";

    todoDeleteButton.addEventListener("click", () => deleteTodo(todo.id));

    if (todo.completed) {
      todoText.style.textDecoration = "line-through";  // Strike-through text when completed
      myCheck.checked = true;  // Check the checkbox when completed
    }

    myCheck.addEventListener("click", () => toggleCompleted(todo.id));

    todoItem.appendChild(myCheck);
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoDeleteButton);

    todoList.appendChild(todoItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

renderTodos();
