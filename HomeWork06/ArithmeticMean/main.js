const arr = ["spring", 24, "yellow", 3, 145, "false", false];

function mean(arr) {
    let count = 0;
    let sum = 0;

    for (let i = 0; i <= 6 ; i++) {
        if ( typeof arr[i] === "number" ) {
            count++;
            sum += arr[i];
        }
    }
    console.log("sum is", sum)
    console.log("count is", count)
    return sum / count;
}

let result = mean(arr);
console.log(result);