// Створіть функцію reverseArray, яка приймає масив і повертає новий масив, елементи якого розташовані у зворотному порядку.
function reverseArray(array) {
    return array.reverse();
}

const originalArray = [1, 2, 3, 4, 5];

console.log(reverseArray(originalArray));

// Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив, що містить тільки унікальні значення з обох масивів (без дублікатів).
function uniqueValues(array1, array2) {
    let array = array1.concat(array2);
    let result = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (result.indexOf(item) === -1) result.push(item);
    }

    return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(uniqueValues(array1, array2));

// Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів з інформацією про студентів (ім'я, вік, середній бал) і повертає середній бал усіх студентів.
function calculateAverageGrade(students) {
    let totalGrade = 0;

    for (let i = 0; i < students.length; i++) {
        totalGrade += students[i]['grade'];
    }

    return Math.round(totalGrade / students.length * 100) / 100;
}

const students = [
    {
        name: "Alice",
        age: 20,
        grade: 4.5
    },
    {
        name: "Bob",
        age: 21,
        grade: 3.9
    },
    {
        name: "Charlie",
        age: 19,
        grade: 4.8
    }
];

console.log(calculateAverageGrade(students));