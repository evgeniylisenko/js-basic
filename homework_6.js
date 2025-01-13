// Вам необхідно написати функцію doubleLetter(str), яка приймає на вхід рядок і повертає новий рядок, у якому кожен символ повторюється двічі hello ⇒ hheelllloo.
function doubleLetter(str) {
    // let result = '';
    //
    // for (let i = 0; i < str.length; i++) {
    //     result += str[i] + str[i];
    // }
    //
    // return result;

    return str.replace(/./g, '$&$&');
}

console.log(doubleLetter('hello'));

// Вам необхідно написати функцію padString(str, length, symbol, toLeft), яка приймає на вхід рядок, число, що є довгим рядком, який ми хочемо отримати в результаті та символ,
// яким доповниться рядок, якщо це буде потрібно, четвертим параметром є буремний «прапор»,
// чи додавати символи зліва або справа(за замовчуванням).
// Якщо 2 параметр менше, ніж довжина вихідного рядка, то виводимо вихідний рядок без змін.
// Приклад виклику: padString('Ivan', 6, '*') // 'Ivan**'.
function padString(str, length, symbol, toLeft = false) {
    if (str.length >= length) {
        return str;
    }

    let result = str;

    while (result.length < length) {
        result = toLeft ? symbol + result : result + symbol;
    }

    return result;
}

// Приклади використання
console.log(padString('Ivan', 8, '*')); // 'Ivan**'
console.log(padString('Ivan', 6, '*')); // 'Ivan**'
console.log(padString('Ivan', 8, '*', true)); // '**Ivan'
console.log(padString('Ivan', 6, '*', true)); // '**Ivan'
console.log(padString('Ivan', 4, '*')); // 'Ivan'
console.log(padString('Ivan', 2, '*')); // 'Ivan'


// Вам необхідно написати функцію camelCase(str, separator), яка приймає на вхід рядок і перетворює його до формату camelCase.
function camelCase(str, separator) {

    return str.split(separator)
        .map((word, index) => index ? word[0].toUpperCase() + word.slice(1) : word)
        .join('');
}

console.log(camelCase('I am a programmer', ' ')) // IAmAProgrammer