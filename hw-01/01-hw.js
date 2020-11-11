const tomatoPrice = 15.678;
const cucumberPrice = 123.965;
const orangePrice = 90.2345;

let usersAmount = 500;

let productsMaxPrice = Math.max(tomatoPrice, cucumberPrice, orangePrice);
console.log(`Max price is: ${productsMaxPrice}`);

let productsMinPrice = Math.min(tomatoPrice, cucumberPrice, orangePrice);
console.log(`Min price is: ${productsMinPrice}`);

let totalSumOfAllProducts = tomatoPrice + cucumberPrice + orangePrice;
console.log(`Total sum of all products is: ${totalSumOfAllProducts}`);


let tomatoPriceIntegerPart = Math.trunc(tomatoPrice);
let cucumberPriceIntegerPart = Math.trunc(cucumberPrice);
let orangePriceIntegerPart = Math.trunc(orangePrice);

let totalSumOfIntegerPartsForProducts = Math.floor(tomatoPriceIntegerPart + cucumberPriceIntegerPart + orangePriceIntegerPart);
console.log(`Total sum of all products (only integer parts) is: ${totalSumOfIntegerPartsForProducts}`);

let roundedTotalSum = Math.ceil(totalSumOfIntegerPartsForProducts / 100) * 100;
console.log(`Total sum (rounded up to hundreds) is: ${roundedTotalSum}`);

let isSumEven = undefined;
if ((totalSumOfIntegerPartsForProducts % 2) == 0) {
	isSumEven = true;
} else {
	isSumEven = false;
}
console.log(`Sum of all products (only integer parts) is even: ${isSumEven}`);

let remainderAfterPayment = usersAmount - totalSumOfAllProducts;
console.log(`Remainder after 500 grn were paid is: ${remainderAfterPayment}`);

let averageValueOfProductPrices = parseFloat((totalSumOfAllProducts/3).toFixed(2));
console.log(`Average value of products prices is: ${averageValueOfProductPrices}`);


let randomDiscountRate = Math.floor(Math.random() * 100) + 1;
console.log(`Discount is ${randomDiscountRate}`);

let discountValue = Math.floor((totalSumOfAllProducts * randomDiscountRate) / 100);
console.log(`Discount value is ${discountValue}`);

let sumToPayWithDiscount = parseFloat((totalSumOfAllProducts - discountValue).toFixed(2));
console.log(`Sum to pay (with discount) is ${sumToPayWithDiscount}`);

let costPrice = Math.trunc(totalSumOfAllProducts / 2);
console.log(`Cost price is ${costPrice}`);

let netProfit = costPrice - discountValue;
console.log(`Net profit is ${netProfit}`);