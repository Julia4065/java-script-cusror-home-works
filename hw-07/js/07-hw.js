const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    return +(salary * this.tax);
}


function getMiddleTaxes() {
    return +(this.tax * this.middleSalary).toFixed(2);
}


function getTotalTaxes() {
    return +(this.tax * this.middleSalary * this.vacancies);
}


function getMySalary(salaryFrom, salaryTo) {
    const salary = +(salaryFrom + Math.floor((salaryTo - salaryFrom) * Math.random()));
    const taxes = +(this.tax * salary).toFixed(2);
    return {
        salary,
        taxes,
        profit: +(salary - taxes).toFixed(2)
    }
}


console.log(`With salary 1000 in Ukraine you will pay tax: ${getMyTaxes.call(ukraine, 1000)}`);
console.log(`Average sum of taxes in Latvia is: ${getMiddleTaxes.call(latvia)}`);
console.log(`Total sum of taxes in Litva is: ${getTotalTaxes.call(litva)}`);

let interval = setInterval(function () {
    console.log(getMySalary.call(ukraine, 1500, 2000));
}, 10000);
setTimeout(function () {
    clearInterval(interval);
}, 30000);