// Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив, у якому кожен рядок має першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.
const words = ["apple", "banaNA", "kiWi", "ORANGE"];

function capitalizeStrings(array) {
    return array.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase());
}

console.log(capitalizeStrings(words));

// Напишіть функцію findCommonElements, яка приймає на вхід два масиви і повертає новий масив, що містить елементи, які є в обох вихідних масивах.
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function findCommonElements(array1, array2) {
    return array1.filter(value => array2.includes(value));
}

console.log(findCommonElements(array1, array2)); // [3, 4, 5]

// Напишіть функцію analyzeArray, яка приймає на вхід масив чисел і повертає об'єкт з такими властивостями:
function analyzeArray(array) {
    return {
        sum: array.reduce((acc, num) => acc + num, 0),
        average: array.reduce((r, i) => r + i, 0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
    };
}

const numbers = [1, 2, 3, 4, 5];

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }