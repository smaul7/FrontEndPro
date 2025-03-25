const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber)

const imgPath = `img/${randomNumber}.jpg`;

document.querySelector(".randomImg").src = imgPath;