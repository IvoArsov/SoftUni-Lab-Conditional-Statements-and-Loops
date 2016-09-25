'use strict';

function biggestOfThreeNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);

    let biggestNum = Math.max(num1, num2, num3);

    console.log(biggestNum);
}

biggestOfThreeNumbers(['5', '-2', '7']);