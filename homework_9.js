// Вам необхідно написати функцію, яка приймає на вхід масив чисел і повертає новий масив, що містить тільки ті числа, які є простими числами.
const ArrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const checkPrimeNumber = (number) => {
    if (number < 2) return false;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};
const ArrayPrimeNumbers = (array) => array.filter(item => checkPrimeNumber(item) ? item : false);

console.log(ArrayPrimeNumbers(ArrayNumbers));

// Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, де кожен об'єкт описує сповіщення та має поля source / text / date.
// Вам необхідно перетворити цей масив на об'єкт, де ключем буде джерело сповіщення, а значенням - масив сповіщень із цього джерела.
const sources = [
    {source: "google.com", text: "google.com 1", date: "12.12.2012"},
    {source: "bing.com", text: "bing.com 1", date: "12.12.2003"},
    {source: "google.com", text: "google.com 2", date: "12.12.1998"},
    {source: "yahoo.com", text: "yahoo.com 1", date: "12.12.1999"},
    {source: "bing.com", text: "bing.com 2", date: "12.12.2008"},
];

const sourcesToObject = sources.reduce((accumulator, item) => {
        if (!accumulator[item.source]) accumulator[item.source] = [];

        const {text, date} = item;

        accumulator[item.source].push({text, date});

        return accumulator;
    },
    {}
);

console.log(sourcesToObject)

// Вам необхідно написати функцію, яка приймає на вхід масив і повністю повторює поведінку методу масиву group
const data = [
    {id: 1, name: "Alice", faculty: 'Math'},
    {id: 2, name: "Bob", faculty: 'IT'},
    {id: 3, name: "Charlie", faculty: 'Math'},
    {id: 4, name: "Charlie2", faculty: 'IT'},
    {id: 5, name: "Charlie3", faculty: 'Math'},
];

function group(array, keyGetter) {

    return array.reduce((accumulator, item) => {
            const key = keyGetter(item);
            (
                accumulator[key] = accumulator[key] || []).push(item);

            return accumulator;
        },
        {}
    );
}

console.log(group(data, item => item.faculty));
