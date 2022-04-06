function drawTriangle(rowCount) {
    let nextValue = 1;
    for (let i = 1; i <= rowCount; i++) {
        let row = " ";
        for (let j = 0; j < rowCount - i; j++) {
            row += "  ";
        }
        for (let j = 0; j < i; j++) {
            row += " ".repeat(Math.log10(nextValue) + 1);
            row += nextValue;
            nextValue += 2;
            // row += " ";
        }
        console.log(row);
    }
}

drawTriangle(10)