function Exponentiation() {
    let x = prompt("Adj meg egy törtszámot!");
    while (x % 1 === 0) {
        x = prompt("A szám nem tört szám. Adj meg tört számot!")
    }

    let n = prompt("Adj meg egy 1-nél nagyobb egész számot!");
    while (n <= 1) {
        n = prompt("A szám nem nagyobb egynél. Adj meg egy 1-nél nagyobb számot!");
    }
    return Math.pow(x, n);
}

console.log(Exponentiation())
