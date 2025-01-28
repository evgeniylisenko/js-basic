//Вам необхідно використовувати масив нотифікацій з минулих занять.
// До отриманого під час групування об'єкта notifications, вам необхідно додати ітератор,
// щоб під час перебору в циклі for of ми отримували кожен елемент із вкладених списків об'єкта notifications таким чином, немов працюємо з "плоским" масивом.

const students = [
    {name: "Alice", age: 20, grade: 4.5},
    {name: "Bob", age: 21, grade: 3.9},
    {name: "Charlie", age: 19, grade: 4.8}
];

students[Symbol.iterator] = function () {
    let index = 0;
    return {
        next: () => {
            if (index < students.length) {
                return {
                    value: students[index++],
                    done: false
                };
            } else {
                return {
                    done: true
                };
            }
        }
    };
};

for (const student of students) {
    console.log(student.name);
    console.log(student.age);
    console.log(student.grade);
}

const notifications = {
    group1: ['Notification 1 START', null, undefined, false, true],
    group2: ['Notification 2 START', 2,4,65,23,821,52],
    group3: ['Notification 3 START', 'STRING', 'TRUE', "FALSE"],
};

notifications[Symbol.iterator] = function () {
    const values = Object.keys(this);
    let valueIndex = 0;
    let itemIndex = 0;
    const self = this;

    return {
        next() {
            if (valueIndex >= values.length) return {done: true};

            const items = self[values[valueIndex]];

            if (itemIndex >= items.length) {
                valueIndex++;
                itemIndex = 0;

                return this.next();
            }

            const item = items[itemIndex];

            itemIndex++;

            return  { value: item, done: false};
      }
    };
}

for (let item of notifications) {
    console.log(item);
}


////Написати функцію sqr, яка приймає 2 аргументи: (x, cache), де x є number і cache - зовнішній map.
// Функція має виконувати умови:
// - перевіряти, чи є в cache вже обчислений квадрат від х
// - повертати існуючий запис з cache в разі його наявності
// - обчислювати квадрат від х в разі його відсутності в cache
// - записувати в cache обчислений квадрат від х в разі його відсутності в cache
// - повертати новий запис з cache

function sqr(x, cache) {

    if (cache.has(x)) {
        return cache.get(x);
    }

    const result = x * x;

    cache.set(x, result);

    return result;
}

const cache = new Map();

console.log(sqr(5, cache));

