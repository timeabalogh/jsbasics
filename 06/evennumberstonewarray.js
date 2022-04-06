// Feladat 4
// Egy függvény, ami egy másik tömböt ad vissza, amiben csak a páros elemek vannak benne.

const numbers = [1, 2, 3, 4, 5, 6];

function evenNumbersToNewArray(array) {
    const result = array.filter(x => x % 2 == 0);
    console.log(result);
}

evenNumbersToNewArray(numbers)