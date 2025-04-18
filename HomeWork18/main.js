const body = document.querySelector(".body");
let actualTime = 75;

const timerEl = document.createElement("p");
body.appendChild(timerEl);

function rerenderTimer() {
    let seconds;
    let minutes;

    if (actualTime> 60) {
        minutes = Math.floor(actualTime / 60);
        seconds = actualTime % 60;

         const formatted = `${String(minutes)}:${String(seconds).padStart(2, '0')}`;
         timerEl.textContent = formatted;
    } else {
        timerEl.textContent = String(actualTime);
    }
};

rerenderTimer();

const intervalId = setInterval( () => {
    actualTime--;

    if (actualTime < 0) {
        clearInterval(intervalId);
        return;
    }

   rerenderTimer();
}, 1000);


