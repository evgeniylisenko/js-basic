//Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі:
// Число N є простим числом, якщо число N просте, та Число N не є простим числом, якщо число N складене.
const number = +prompt('Введите число');

let isPrimeNumber = true;

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrimeNumber = false;
        break;
    }
}

console.log(isPrimeNumber ? number  + '- просте число' : number + ' - непросто число');

// if (isPrimeNumber) {
//     console.log(number + ' - просте число');
// } else {
//     console.log(number + ' - непросто число');
// }


///Вам необхідно написати програму, яка приймає на вхід число N і знаходить усі числа в діапазоні від 1 до N, які є досконалими числами.
for (let i = 1; i <= number; i++) {
    let sum = 0;
    // Найти сумму делителей числа i
    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            sum += j;
        }
    }

    // Проверить, является ли число совершенным
    if (sum === i) {
        console.log(i + ` - совершенное число`);
    }
}

//Вам необхідно написати програму, яка приймає на вхід число, що буде висотою вершини вашої ялинки. Уся ялинка має бути реалізована одним рядком:
let i = 0;
let j = 0;

const max = 5;

let space = "";
let start = "";

while (i < max) {
    space = "";
    start = "";

    for (j = 0; j < max - i; j++) {
        space += " ";
    }

    for (j = 0; j < 2 * i + 1; j++) {
        start += "*";
    }

    console.log(space + start);
    i++;
}


