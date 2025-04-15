const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-task');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = `${taskText} <button class="delete-btn">Видалити</button>`;

    todoList.appendChild(li);
    taskInput.value = '';
});

todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
  }
});