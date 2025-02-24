// randomDelayPrint. Створіть функцію randomDelayPrint, яка прийматиме рядок message як аргумент і виводитиме кожну букву цього рядка з довільною затримкою від 0 до 1 секунди.
// Використовуйте setTimeout, щоб додати випадкову затримку перед виведенням кожної літери.
const randomDelayPrint = (message) => {
    let delay = 0;

    message.split('').forEach((char) => {
        delay += Math.random() * 1000;
        setTimeout(() => {
            console.log(char);
        }, delay);
    });
};
randomDelayPrint("Hello");

// intervalRac.Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах.
// Функція intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t.
// Коли всі функції виконано, intervalRace має повернути масив із результатами.
function intervalRace(functions, t) {
    return new Promise((resolve) => {
        let results = [], index = 0;

        async function executeNext() {
            if (index < functions.length) {
                results.push(await functions[index++]());
                setTimeout(executeNext, t);
            } else {
                resolve(results);
            }
        }

        executeNext();
    });
}

const funcs = [
    function () {
        return new Promise((resolve) => setTimeout(() => resolve("Hello"), 1000));
    },

    function () {
        return new Promise((resolve) => setTimeout(() => resolve("World"), 1100));
    },

    function () {
        return new Promise((resolve) => setTimeout(() => resolve("JavaScript"), 1200));

    }
];

intervalRace(funcs, 1500).then(console.log);

