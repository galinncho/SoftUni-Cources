function solve(number1, operator, number2) {
    let result = 0;
    switch (operator) {
        case "+":
            result = (number1 + number2).toFixed(2);
            break;
        case "-":
            result = (number1 - number2).toFixed(2);
            break;
        case "*":
            result = (number1 * number2).toFixed(2);
            break;
        case "/":
            result = (number1 / number2).toFixed(2);
            break

        default:
            break;
    }
    console.log(result);
}
solve(25.5,

    '-',
    
    3);