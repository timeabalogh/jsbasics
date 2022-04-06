function drawTriangle(rowCount) {
    let row = "";
    for (let i = 1; i <= rowCount; i++) {
        for (let j = 1; j <= rowCount - i; j++) {
            row += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            row += "+";
        }
        row += "\n";
    }
    console.log(row);
}

drawTriangle(10)

