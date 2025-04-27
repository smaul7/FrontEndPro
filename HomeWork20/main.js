const postsContainer = document.getElementById('posts-container');
const postAPI = 'https://jsonplaceholder.typicode.com/posts';
const createPostForm = document.getElementById('create-post-form');
const titleInput = document.getElementById('title');
const bodyInput = document.getElementById('body');

fetch(`${postAPI}?_limit=2`)
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      const postEl = document.createElement('div');
      postEl.classList.add('post');

      postEl.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <button data-post-id="${post.id}" class="load-comments-btn">Завантажити коментарі</button>
        <div class="comments"></div>
      `;

      postsContainer.appendChild(postEl);
    });
  });

  postsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('load-comments-btn')) {
      const postId = e.target.dataset.postId;
      const commentsContainer = e.target.nextElementSibling;
  
      e.target.disabled = true;
      e.target.textContent = 'Завантаження...';
  
      fetch(`${postAPI}/${postId}/comments?_limit=2`)
        .then(response => response.json())
        .then(comments => {
          commentsContainer.innerHTML = '';
  
          comments.forEach(comment => {
            const commentEl = document.createElement('div');
            commentEl.classList.add('comment');
  
            commentEl.innerHTML = `
              <h4>${comment.name}</h4>
              <p><strong>Email:</strong> ${comment.email}</p>
              <p>${comment.body}</p>
            `;
  
            commentsContainer.appendChild(commentEl);
          });
  
          e.target.remove();
        });
    }
  });

  createPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();
  
    if (!title || !body) {
      alert('Заповніть усі поля!');
      return;
    }
  
    fetch(postAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1
      })
    })
      .then(response => response.json())
      .then(newPost => {
        alert('Пост створено успішно!');
  
        const postEl = document.createElement('div');
        postEl.classList.add('post');
  
        postEl.innerHTML = `
          <h2>${newPost.title}</h2>
          <p>${newPost.body}</p>
          <button data-post-id="${newPost.id}" class="load-comments-btn">Завантажити коментарі</button>
          <div class="comments"></div>
        `;
  
        postsContainer.prepend(postEl);
  
        titleInput.value = '';
        bodyInput.value = '';
      })
      .catch(error => {
        console.error('Помилка при створенні поста:', error);
      });
  });