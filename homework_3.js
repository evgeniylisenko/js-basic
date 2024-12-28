const userInput = +prompt('Введіть число');

///Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення залежно від значення числа. Якщо число ділиться на 3, то повідомлення має бути Fizz, якщо число ділиться на 5, то повідомлення має бути Buzz, а якщо число ділиться і на 3, і на 5, то повідомлення має бути FizzBuzz. Наприклад, для числа 15 повідомлення має бути FizzBuzz.
if (userInput === 0) {
    console.log('Error message');
} else if (userInput % 3 === 0 && userInput % 5 === 0) {
    console.log('FizzBuzz');
} else if (userInput % 3 === 0) {
    console.log('Fizz');
} else if (userInput % 5 === 0) {
    console.log('Buzz');
} else {
    console.log('Error message');
}

// Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення, що вказує, чи є введений рік високосним.
if (userInput % 4 === 0 && userInput % 100 !== 0 || userInput % 400 === 0) {
    console.log('Рік високосний')
} else {
    console.log('Рік не високосний')
}

//Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі Вам N рік / роки / років. Залежно від числа N слово рік має змінюватися на років або року. Наприклад, Вам 1 рік, Вам 5 років, Вам 42 роки.
let count = userInput % 100;

let result = '';

if (count >= 5 && count <= 20) {
    result = "Вам " + userInput + " років";
} else {
    count = count % 10;
    if (count === 1) {
        result = "Вам " + userInput + " рік";
    } else if (count >= 2 && count <= 4) {
        result = "Вам " + userInput + " роки";
    } else {
        result = "Вам " + userInput + " років";
    }
}

console.log(result);


