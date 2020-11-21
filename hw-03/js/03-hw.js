getMaxDigit = (number) => {
    let numberDigits = number.toString().split('').map(Number);
    return Math.max(...numberDigits);
}

powOfNumber = (number, power) => {
    let result = number;
    if (power > 1) {
        result *= powOfNumber(number, power - 1);
        return result;
    } else {
        return number;
    }
}

formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1, name.length).toLowerCase();
}

let taxPercent = 19.5;
getSumAfterTaxes = (initialSum) => {
    return initialSum - (initialSum * taxPercent) / 100;
}

getRandomNumber = (numberFrom, numberTo) => {
    return Math.floor((Math.random() * numberTo) + numberFrom);
}

countLetterInWord = (letterToSearch, word) => {
    let numberOfLetterOccurrences = 0;
    for (const letter of word) {
        if (letter.toLowerCase() === letterToSearch.toLowerCase()) {
            numberOfLetterOccurrences++;
        }
    }
    return numberOfLetterOccurrences;
}

const dollarToUahCcyRate = 28.5;
const dollarSign = "$";
const uahSign = "uah";

convertCurrency = (amount) => {
    if (amount.includes(dollarSign)) {
        return `${amount.slice(0, amount.length - dollarSign.length) * dollarToUahCcyRate}UAH`;
    } else if (amount.toLowerCase().includes(uahSign)) {
        return `${+(amount.slice(0, amount.length - uahSign.length) / dollarToUahCcyRate).toFixed(2)}$`;
    } else throw new Error("Not supported currency");
}

getRandomPassword = (passwordLength = 8) => {
    let generatedPwd = '';
    for (let i = 0; i < passwordLength; i++) {
        generatedPwd += Math.floor(Math.random() * 10);
    }
    return generatedPwd;
}

deleteLetters = (letterToDelete, word) => {

    let wordWithoutDeletedLetter = "";

    for (const letter of word) {
        if (letter.toLowerCase() !== letterToDelete.toLowerCase()) {
            wordWithoutDeletedLetter += letter;
        }
    }

    return wordWithoutDeletedLetter;
}

isPalyndrom = (word) => {
    const reversedWord = word.split("").reverse().join("");

    return word.toLowerCase() === reversedWord.toLowerCase();
}

deleteDuplicateLetter = (phrase) => {
    let phraseWithoutDuplicates = "";

    for (let i = 0; i < phrase.length; i++) {
        if (phrase.toLowerCase().match(new RegExp(phrase[i].toLowerCase(), "g")).length === 1) {
            phraseWithoutDuplicates += phrase[i];
        }
    }

    return phraseWithoutDuplicates;
}

console.log(`Function #1. Max digit is: ${getMaxDigit(2736)}`);
console.log(`Function #2. Number in power is: ${powOfNumber(5, 4)}`);
console.log(`Function #3. Formatted name is: ${formatName("vLAD")}`);
console.log(`Function #4. Summ after taxes payment is: ${getSumAfterTaxes(1000)}`);
console.log(`Function #5. Random number is: ${getRandomNumber(1, 35)}`);
console.log(`Function #6. Number of letter in the word is: ${countLetterInWord("a", "Astalavista")}`);
console.log(`Function #7. Converted ccy is: ${convertCurrency("3$")}`);
console.log(`Function #8. Random password is: ${getRandomPassword()}`);
console.log(`Function #9. Word with deleted letter is: ${deleteLetters("a", "abla bla bla a r a aa s")}`);
console.log(`Function #10. Is word polyndrom: ${isPalyndrom("madam")}`);
console.log(`Function #11. Word after duplicated letters were deleted: ${deleteDuplicateLetter("translaTe tranSfOrm")}`);