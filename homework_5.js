//Вам необхідно написати функцію reverseString(str), яка приймає на вхід рядок і повертає його у зворотному порядку.
function reverseString(str) {
    // let result = ''
    //
    // for (let i = str.length - 1; i >= 0; i--) {
    //     result += str[i];
    // }
    //
    // return result;
    return str.split("").reverse().join("");
}

console.log(reverseString('hello world'));

//Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.
const string = prompt("Введите значение");

function isPalindrome(str) {
    const stringArr = reverseString(str);

    return str == stringArr ? 'Це значення є паліндромом' : 'Це значення не є паліндромом';
}

string ? console.log(isPalindrome(string)) : '';

//Вам необхідно написати функцію findGCD(a, b), яка приймає на вхід два числа і повертає їхній НСД.
function findGCD(a, b) {
    while (b !== 0) {
        const temp = b; // 55 20 15 5
        b = a % b;      // 20 15 5 0 - після цього в цикл не заходить
        a = temp;       // 55 20 15 5
    }

    return a;
}

console.log(findGCD(20, 55));

