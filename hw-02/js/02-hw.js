let n;
let m;

do {
	n = +prompt("Please enter first INTEGER number (not empty)");
} while (!n || !Number.isInteger(n));

do {
	m = +prompt(`Please enter second INTEGER number (it should be equal or greater than ${n})`);
} while (!m || !Number.isInteger(m) || !(m >= n));

const EXCLUDE_EVEN_NUMBERS = confirm("Do you want to exclude even numbers?");

let totalSum = 0;

for (let number = n; number <= m; number++) {

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

alert(`Sum from ${n} to ${m} (exclude even numbers: ${EXCLUDE_EVEN_NUMBERS}) is ${totalSum}`);