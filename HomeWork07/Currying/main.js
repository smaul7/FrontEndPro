function multiple(a) {
    return function (b) {
        return a * b;
    }
}

console.log(multiple(5)(2));