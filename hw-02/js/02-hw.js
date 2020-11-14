let fromNumber;
let toNumber;

do {
	fromNumber = +prompt("Please enter first INTEGER number (not empty)");
} while (!fromNumber || !Number.isInteger(fromNumber));

do {
	toNumber = +prompt(`Please enter second INTEGER number (it should be equal or greater than ${fromNumber})`);
} while (!toNumber || !Number.isInteger(toNumber) || !(toNumber >= fromNumber));

const EXCLUDE_EVEN_NUMBERS = confirm("Do you want to exclude even numbers?");

let totalSum = 0;

for (let number = fromNumber; number <= toNumber; number++) {

	if (EXCLUDE_EVEN_NUMBERS) {
		if (number % 2 !== 0) {
			totalSum += number;
		} else {
			continue;
		}
	} else {
		totalSum += number;
	}
}

alert(`Sum from ${fromNumber} to ${toNumber} (exclude even numbers: ${EXCLUDE_EVEN_NUMBERS}) is ${totalSum}`);