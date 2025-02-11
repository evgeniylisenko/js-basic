// Напишіть функцію, яка рекурсивно обчислює n-те число Фібоначчі.
// Числа Фібоначчі визначаються як послідовність, у якій кожне число дорівнює сумі двох попередніх чисел (наприклад, 0, 1, 1, 2, 3, 5, 8 і так далі).
// Використовуйте рекурсію для обчислення чисел Фібоначчі.
const fibonacci = (num) => {
    if (num <= 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(10));

// Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву.
// Використовуйте рекурсію для знаходження всіх перестановок.
// Наприклад, якщо вхідний масив [1, 2, 3], функція має повернути масив, що містить [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [2, 3, 1], [3, 1, 2] і [3, 2, 1].
const getArrayPermutation = (array) => {
    const length = array.length;

    if (length === 0) return [[]];

    const result = [];

    for (let i = 0; i < length; i++) {
        const rest = array.slice(0, i).concat(array.slice(i + 1));

        const perms = getArrayPermutation(rest);

        for (const perm of perms) {
            result.push([array[i], ...perm]);
        }
    }

    return result;
};

console.log(getArrayPermutation([1, 2, 3]));