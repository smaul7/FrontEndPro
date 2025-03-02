let n = prompt("Provide whole number, please");

for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        console.log("Number isn't odd");
        break;
    }
    else if (i === n-1) {
        console.log("Number is odd");
    }
}