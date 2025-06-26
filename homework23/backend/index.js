const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let todos = [
    { id: 1, title: "Перший TODO", completed: false },
    { id: 2, title: "Другий TODO", completed: true },
];

app.get("/todos", (req, res) => {
    res.json(todos);
});

app.post("/todos", (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }

    const newTodo = {
        id: Date.now(),
        title,
        completed: false
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
    const todoId = +req.params.id;
    const { title, completed } = req.body;

    const index = todos.findIndex(todo => todo.id === todoId);
    if (index === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }

    if (typeof title !== "undefined") {
        todos[index].title = title;
    }
    if (typeof completed !== "undefined") {
        todos[index].completed = completed;
    }

    res.json(todos[index]);
});

app.delete("/todos/:id", (req, res) => {
    const todoId = +req.params.id;
    const index = todos.findIndex(todo => todo.id === todoId);

    if (index === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }

    todos.splice(index, 1);
    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
