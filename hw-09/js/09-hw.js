getRandomColor = () => {
    return '#' + Math.random().toString(16).substr(-6);
}

generateBlocks = () => {

    const allSquaresArea = document.querySelector(".squares");
    allSquaresArea.innerHTML = ' ';

    for (let i = 0; i < 25; i++) {
        const square = document.createElement('div');
        square.style.width = '50px';
        square.style.height = '50px';
        square.style.backgroundColor = getRandomColor();

        allSquaresArea.append(square);
    }
}

generateBlocksInterval = () => {
    setInterval(generateBlocks, 1000);
}


generateBlocksInterval();