//Вам необхідно написати функцію-декоратор logArguments(fn), яка приймає на вхід функцію і додає можливість логувати всі аргументи, передані у функцію-аргумент.
const logArguments = (fn) => {
    return (...arguments) => {
        return fn.apply(this, arguments);
    }
};

const strUpperCase = (str) => {
    return str.toUpperCase();
}

const sum = (a, b) => {
    return a + b;
};

const upperCase = logArguments(strUpperCase);
console.log(upperCase('hello world'));

const calc = logArguments(sum);
console.log(calc(2, 5));

///Вам необхідно написати функцію-декоратор validate(sum, validator),
// яка приймає на вхід функцію sum і додає можливість перевіряти аргументи, передані у функцію sum, на відповідність заданому validator (наприклад, всі аргументи мають бути додатними).
// Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.
function validate(sum, validator) {
    return function () {
        for (let i = 0; i < arguments.length; i++) {
            if (!validator(arguments[i])) {
                throw new Error("Validation failed");
            }
        }
        return sum.apply(this, arguments);
    };
}

function number(...args) {
    return args.reduce((acc, num) => acc + num, 0);
}

function isPositive(num) {
    return typeof num === 'number' ? num > 0 : false;
}

const validatedNum = validate(number, isPositive);

console.log(validatedNum(1, 2, 3, 4, 5, 6));
console.log(validatedNum(1, 2, -3, 4, 5, 6));


