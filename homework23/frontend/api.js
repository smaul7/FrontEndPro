const API_URL = "http://localhost:3000/todos";

export async function getTodos() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch todos");
    return await response.json();
  } catch (err) {
    console.error("Error getting todos:", err);
    return [];
  }
}

export async function createTodo(title) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    });
    if (!response.ok) throw new Error("Failed to create todo");
    return await response.json();
  } catch (err) {
    console.error("Error creating todo:", err);
    return null;
  }
}

export async function updateTodo(id, updates) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates)
    });
    if (!response.ok) throw new Error("Failed to update todo");
    return await response.json();
  } catch (err) {
    console.error("Error updating todo:", err);
    return null;
  }
}

export async function deleteTodo(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });
    if (!response.ok) throw new Error("Failed to delete todo");
  } catch (err) {
    console.error("Error deleting todo:", err);
  }
}
