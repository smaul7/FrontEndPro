console.log("Base array")
const array = [145, "nahaika", 54 ,0 ,6, 34, 222];
console.log(array);

function removeElement(array, item) {
    if (array.indexOf(item) !== -1) {
        array.splice( array.indexOf(item), 1 )
        console.log(array)
    }
    else {
        console.log("Item is not there in the array")
    }
}

console.log("Item is 54")
removeElement(array, 54)

console.log('Item is "nahaika" ')
removeElement(array, "nahaika")

console.log("Item is true")
removeElement(array, true)

