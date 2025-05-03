export function renderPost(post) {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
  
    postEl.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <button data-post-id="${post.id}" class="load-comments-btn">Завантажити коментарі</button>
      <div class="comments"></div>
    `;
    
    return postEl;
  }

export function renderComment(comment) {
  const commentEl = document.createElement("div");
  commentEl.classList.add("comment");

  commentEl.innerHTML = `
    <h4>${comment.name}</h4>
    <p><strong>Email:</strong> ${comment.email}</p>
    <p>${comment.body}</p>
  `;

  return commentEl;
}

export function clearPostForm(titleInput, bodyInput) {
    titleInput.value = "";
    bodyInput.value = "";
}

export function showSuccess(message = "Пост створено успішно!") {
    alert(message);
}