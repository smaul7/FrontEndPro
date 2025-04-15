const number = Number(prompt("Введіть тризначне число:"));

const a = Math.floor(number / 100);  
const b = Math.floor((number % 100) / 10);
const c = number % 10;

if (a === b && b === c) {
    console.log("Усі цифри однакові.");
} else if (a === b || a === c || b === c) {
    console.log("Є однакові цифри.");
} else {
    console.log("Усі цифри різні.");
}