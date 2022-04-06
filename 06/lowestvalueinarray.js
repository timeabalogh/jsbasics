//Feladat2:
//A legkisebb elem indexét adja vissza

const numbers = [1, 2, 3, 4, 5];
let min = numbers[0];

function lowestValueInArray() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }

    }
    console.log(min);
}

lowestValueInArray(numbers)