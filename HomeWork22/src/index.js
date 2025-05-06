import { loadComments, loadPosts, createPostAPI } from "./api.js";
import { renderPost, renderComment, clearPostForm, showSuccess } from "./ui.js"
import './styles/main.scss';


const postsContainer = document.getElementById("posts-container");
const createPostForm = document.getElementById("create-post-form");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");

async function init() {
  postsContainer.innerHTML = "Loading...";
  try {
    const posts = await loadPosts();
    postsContainer.innerHTML = "";

    posts.forEach(post =>{
      const postEl = renderPost(post);
      postsContainer.appendChild(postEl);
    })

  } catch (error) {
    console.error("Помилка при ініціалізації:", error);
  }
}

postsContainer.addEventListener("click", async (e) => {
  if (e.target.classList.contains("load-comments-btn")) {
    const postId = e.target.dataset.postId;
    const commentsContainer = e.target.nextElementSibling;
    e.target.disabled = true;
    e.target.textContent = "Завантаження...";

    const comments = await loadComments(postId);
    commentsContainer.innerHTML = "";
    comments.forEach(comment =>{
      const commentEl = renderComment(comment);
      commentsContainer.appendChild(commentEl);
    });
    e.target.remove();
  }
});

createPostForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();
  
  if (!title || !body) {
    alert("Заповніть всі поля");
    return;
  }

  try {
    const newPost = await createPostAPI(title, body);
    showSuccess();
    const postEl = renderPost(newPost);
    postsContainer.prepend(postEl);
    clearPostForm(titleInput, bodyInput);
  } catch (error) {
    console.error("Помилка при створенні поста", error)
  }
});

init()
