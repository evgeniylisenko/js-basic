//Вам необхідно написати функцію reverseString(str), яка приймає на вхід рядок і повертає його у зворотному порядку.
function reverseString(str) {
    let result = ''

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    // return str.split("").reverse().join("");
    return result;
}

console.log(reverseString('hellow world'));

//Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.
const number = prompt("Введите значение");

function isPalindrome(number) {
    const stringArr = reverseString(number);
    const result = number == stringArr;

    return result ? console.log('Це значення є паліндромом') : console.log('Це значення не є паліндромом');
}

number ? console.log(isPalindrome(number)) : '';

//Вам необхідно написати функцію findGCD(a, b), яка приймає на вхід два числа і повертає їхній НСД.
function findGCD(a, b) {
    while (a != 0 & b != 0) {

        const sum = a > b;
        const equals = b = b % a

        return sum ? sum : equals;
    }
}

console.log(findGCD(20, 55));

