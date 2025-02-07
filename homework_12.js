// Вам необхідно написати функцію summarize(num), яка приймає на вхід число і повертає функцію, яка під час виклику додає це число до аргументу і повертає результат.
// Якщо аргумент не передано, то додається одиниця. Наприклад, якщо функція викликається з аргументом 5,
// то функція, що повертається, повинна при виклику з аргументом 3 повернути 8 (тому що 3 + 5 = 8) або 6, якщо аргумент не буде передано.

//const summarize = (num) => (x = 1) => num + x;
function summarize(num) {
    return function (x = 1) {
        return num + x;
    }
}

const addSummarize = summarize(5);
console.log(addSummarize(3));
console.log(addSummarize());


// Вам необхідно написати функцію counter(startValue, step), яка приймає на вхід два параметри - стартове значення лічильника і його крок.
// Функція повертає нову функцію, яка при кожному виклику збільшує лічильник на значення і повертає його поточне значення.
// Лічильник повинен мати методи increment, decrement і reset, які збільшують або зменшують значення на step і скидають значення до стартового, відповідно.

function counter(startValue, step) {
    let currentValue = startValue;

    const count = () => currentValue += step;

    count.increment = () => currentValue += step;

    count.decrement = () => currentValue -= step;

    count.reset = () => (currentValue = startValue);

    return count;
}

const myCounter = counter(10, 2);
console.log(myCounter());
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.reset());
