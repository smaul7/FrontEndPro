let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const form = document.querySelector(".js--form");
const input = document.querySelector(".js--form__input");
const todoList = document.querySelector(".js--todos-wrapper");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = input.value.trim();

    if(!title) {
        console.log("enter the task");
        return;
    };

    tasks.push({
        id: Math.random(),
        title,
    });
    localStorage.setItem('tasks', JSON.stringify(tasks))
    createTodoItem()

    input.value = "";
});

function createTodoItem() {
    todoList.innerHTML = "";

    tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = 'todo-item';

    li.innerHTML = `
    <input type="checkbox">
    <span class="todo-item__description">${task.title}</span>
    <button class="todo-item__delete" data-id="${task.id}">Видалити</button>
    `;

    todoList.appendChild(li);
    })
    
}

todoList.addEventListener("click", (e) => {
    if(e.target.classList.contains("todo-item__delete")) {
        const id = +e.target.dataset.id;

        tasks = tasks.filter(task => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        createTodoItem()
    }

    if (e.target.type === "checkbox") {
        const li = e.target.closest('.todo-item');
        if (li) {
            li.classList.toggle('todo-item--checked', e.target.checked);
        }
    }
});

 createTodoItem();
