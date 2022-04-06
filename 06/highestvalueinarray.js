//Feladat1:
//Írjatok egy függvényt, ami egy input szám tömbnek megkeresi a legnagyobb elemét (magát a legnagyobb értéket)

const numbers = [1, 2, 3, 4, 5];
let max = numbers[0];

function highestValueInArray() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }

    }
    console.log(max);
}

highestValueInArray(numbers)