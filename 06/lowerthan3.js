//Feladat 3
//Egy függvény ami megszamolja hány a 3-nál kisebb elem van a tömbben

const numbers = [1, 2, 3, 4, 5];
let count = 0;

function howManyLowerThanThree() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 3) {
            count++;
        }

    }
    console.log(count);
}

howManyLowerThanThree(numbers)