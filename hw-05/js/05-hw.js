getRandomArray = (length, min, max) => {
const resArr = [];
for (let i = 0; i < length; i++) {
    resArr.push(Math.floor(Math.random() * max + min));
}
return resArr;
}

console.log(`First function: ${getRandomArray(15, 1, 100)}`);


getModa = (...numbers) => {
    let counter = 0;
    let ofterNum = 0;
    let maxCounter = 0;
    
    numbers.map((number) => {
        counter = numbers.filter((numberToFilter) => {
            return  (number === numberToFilter) && (Number.isInteger(numberToFilter));
        }).length;
    
        if(counter > maxCounter) {
            maxCounter = counter;
            ofterNum = number;
        }
    });
    
    return ofterNum;
}


console.log(`Second function: ${getModa(6, 2, 55, 77, 77, 77, 77, 77, 77, 57, 87, 23, 2, 56, 3, 2)}`);


getAverage = (...numbers) => {

    let intNumberLength = 0;

const total = numbers.reduce((total, number) => {
   if (Number.isInteger(number)) {
    intNumberLength++;
    return total += number;
   } else {
       return total;
   }
}, 0);

const average = total / intNumberLength;

    return average;
};

console.log(`Third function: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);


getMedian = (...numbers) => {
    const onlyIntsArr = numbers.sort((a, b) => {
        return a - b;
    }).filter((number) => {
        return Number.isInteger(number);
    });


    if (onlyIntsArr.length % 2 !== 0) {
        const index = (onlyIntsArr.length - 1)/ 2;
        return onlyIntsArr[index];
    } else {
        const indexFrom = onlyIntsArr.length/2 - 1;
        const indexTo = onlyIntsArr.length / 2;

        const mediana = (onlyIntsArr[indexFrom] + onlyIntsArr[indexTo]) / 2;

        return mediana;
    }
};

console.log(`Fourth function: ${getMedian(6, 7.8, 2, 55, 11, 78, "n", 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);



filterEvenNumbers = (...numbers) => {
    const oddNumbers = numbers.filter((number) => (number % 2) !== 0);
    return oddNumbers;
};

console.log(`Fifth function: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}`);

countPositiveNumbers = (...numbers) => {
const positivesNumbersCounter = numbers.reduce((counter, number) => {
    if(number > 0) {
    return counter += 1;
    } else {
        return counter;
    }
}, 0);

return positivesNumbersCounter;
};

console.log(`Sixth function: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}`);


getDividedByFive = (...numbers) => {
const numbersThatCanBeDividedToFive = numbers.filter((number) => {
    return number % 5 === 0;
});
return numbersThatCanBeDividedToFive;
};

console.log(`Seventh function: ${getDividedByFive(6, 2, 55, 11, 20, 45, 15, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);


replaceBadWords = (badWords, ...originalPhrase) => {
    const phraseWithoutBadWords = badWords.reduce((phrase, badWord) => {
        return phrase.map(word => {
            if(word.includes(badWord)) {
                return word.replace(badWord, "****");
            } else {
                return word;
            }
        });
    }, originalPhrase);
    return phraseWithoutBadWords.join(" ");
}

console.log(`Eighth function: ${replaceBadWords(["fuck", "shit"], "Are you fucking and shitting kidding")}`);


divideByThree = (words) => {
    const wordArr = words.toLowerCase().split(" ");
const result = wordArr.map((word) => {
    if(word.length > 3) {
        return word.match(/.{1,3}/g);
    } else {
        return word;
    }
});
return result;
}

console.log(`Ninth function: ${divideByThree("Onetwothreefourt rty ghjkd hgfd")}`);