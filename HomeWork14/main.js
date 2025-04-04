const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const img = document.querySelector(".img");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 1;
const totalItems = 5;

function createDots() {
    for (let i = 1; i <= totalItems; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    }
  }

function updateSlider() {
    img.src = `img/${currentIndex}.png`;

    previous.style.display = currentIndex === 1 ? 'none' : 'block';
    next.style.display = currentIndex === totalItems ? 'none' : 'block';

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index + 1 === currentIndex);
    });
  }

previous.addEventListener('click', () => {
    if (currentIndex > 1) {
    currentIndex--;
    updateSlider();
    }
});

next.addEventListener('click', () => {
    if (currentIndex < 5) {
    currentIndex++;
    updateSlider();;
    }
});

createDots();
updateSlider();
