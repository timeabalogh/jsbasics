// Feladat 5
// Egy függvényt, ami egy új tömböt ad vissza, amiben az egyes elemeknek a negyzetei vannak.

const numbers = [1, 2, 3, 4, 5, 6];

function squaredNumbersToNewArray(array) {
    const result = Array.from(array, x => x * x);
    console.log(result);
}

squaredNumbersToNewArray(numbers)
