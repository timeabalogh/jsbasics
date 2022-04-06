// 1. Feladat
// implementálj egy array.every-t és egy array.some-ot

const numbers = [3, 4, 5, 1, 2, 6];

function everyElementIsLargerThan(array, threshold) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= threshold) {
            return false;
        }
    }
    return true;
}

// visszaadja h hamis ha bármelyik elem kisebb, igaz ha mind nagyobb

function someElementsAreLargerThan(array, threshold) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > threshold) {
            return true;
        }
    }
    return false;

}

console.log(everyElementIsLargerThan(numbers, 2))
console.log(someElementsAreLargerThan(numbers, 5))