cycleFunction()

function cycleFunction() {
    let input;

    for (let i = 0; i < 10; i++) {
        input = prompt("Введіть число більше 100:");

        if (input === null) {
            console.log("Ввід скасовано користувачем.");
            return;
        }

        if (+input > 100) {
            console.log("Останнє введене значення:", input);
            return;
        }
    }

    console.log("Цикл завершено. Останнє введене значення:", input);
}