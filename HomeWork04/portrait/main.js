let userBirthYear = prompt("Tell me your birth year, please");
let userTown = prompt("Tell me town you currently living in, please");
let useerSport = promt("Tell me your favourite sport please");

console.log(2025-userBirthYear);
switch(userTown) {
    case "London":
        console.log("You live in the capital")
        break;
    case "Kyiv":
        console.log("You live in the capital")
        break;
    case "Washington":
        console.log("You live in the capital")
        break;
    default:
        console.log(`You live in ${userTown}`)
}
