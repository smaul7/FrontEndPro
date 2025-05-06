import {postAPI} from "./config.js";

export async function loadPosts(limit = 10) {
  try {
    const res = await fetch(`${postAPI}?_limit=${limit}`);

    return await res.json();
  } catch (error) {
    console.error("Помилка при завантаженні постів:", error);
  }
}

export async function loadComments(postId) {
    try {
    const res = await fetch(`${postAPI}/${postId}/comments?_limit=2`)
    return await res.json()
      } catch (error) {
        console.error("Помилка при завантаженні коментарів:", error);
      }
}

export async function createPostAPI(title,body) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({title, body, userId: 1 })
    });
    return await res.json();
}