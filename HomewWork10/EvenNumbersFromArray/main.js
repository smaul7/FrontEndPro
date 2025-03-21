const numbers = [2,4,2,53,237632,3,5,6,,8,32]
const evenNumbers = []; 

numbers.forEach((number) => {
    if(number % 2 === 0) {
        evenNumbers.push(number)
    }
});

console.log(evenNumbers);