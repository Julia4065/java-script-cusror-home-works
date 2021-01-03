function* createIdGenerator() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

const idGenerator = createIdGenerator();
console.log("Task 1:");
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);



function* newFontGenerator(initialValue) {
    let value = initialValue;

    while (true) {
        const char = yield value;
        char === "up" ? value += 2 : (char === "down" ? value -= 2 : value);
    }
}

const fontGenerator = newFontGenerator(14);
console.log("Task 2:");
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);