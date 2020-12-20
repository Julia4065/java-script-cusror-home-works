async function getChineseSymbol() {
    return new Promise((resolve) => {
        const symbol = String.fromCharCode(Date.now().toString().slice(-5));
        resolve(symbol);
    });
};

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

async function getRandomChinese(length) {
    let resultLine = '';
    while (length-- > 0) {
        await sleep(50);
        let tempSymbol = await getChineseSymbol();
        resultLine += tempSymbol;
    }
    return resultLine;
}

getRandomChinese(5).then(result => console.log(result));