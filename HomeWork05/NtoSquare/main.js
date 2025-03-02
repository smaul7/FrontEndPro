let n = prompt("Set number N");

for (let i = 1; i <= 100; i++) {
    if (i ** 2 > n) {
        continue;
    }
    console.log(i);
}