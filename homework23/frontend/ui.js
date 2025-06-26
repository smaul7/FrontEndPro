const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

export function getInputValue() {
  return input.value.trim();
}

export function clearInput() {
  input.value = "";
}

export function renderTodos(todos) {
  list.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.dataset.id = todo.id;

    const span = document.createElement("span");
    span.textContent = todo.completed ? `✅ ${todo.title}` : todo.title;
    span.className = "title";
    span.dataset.completed = todo.completed;
    span.style.textDecoration = todo.completed ? "line-through" : "none";
    span.style.cursor = "pointer";

    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.className = "delete";

    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);
  });
}
