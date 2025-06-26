import { getTodos, createTodo, updateTodo, deleteTodo } from './api.js';
import { renderTodos, getInputValue, clearInput } from './ui.js';

const form = document.getElementById("todoForm");
const list = document.getElementById("todoList");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = getInputValue();
  if (title) {
    await createTodo(title);
    clearInput();
    refreshTodos();
  }
});

list.addEventListener("click", async (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  const todoId = li.dataset.id;

  if (e.target.matches("button.delete")) {
    await deleteTodo(todoId);
    refreshTodos();
  }

  if (e.target.matches("span.title")) {
    const completed = e.target.dataset.completed === "true";
    await updateTodo(todoId, { completed: !completed });
    refreshTodos();
  }
});

async function refreshTodos() {
  const todos = await getTodos();
  renderTodos(todos);
}

refreshTodos();
