const myArticle = document.querySelector(".myArticle");
const myButton = document.querySelector(".myButton");


myButton.addEventListener('click', () => {
    myArticle.classList.toggle("myArticle--color")
});
