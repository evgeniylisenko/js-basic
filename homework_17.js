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

