function secondGradeSolver(a, b, c) {
    let solution1 = (-b + Math.sqrt(b * b - 4 * a * c)) / 2 * a;
    let solution2 = (-b - Math.sqrt(b * b - 4 * a * c)) / 2 * a;

    console.log(solution1);
    console.log(solution2);
}

secondGradeSolver(1, 5, 4)