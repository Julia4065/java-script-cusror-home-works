const tomatoPrice = 15.678;
const cucumberPrice = 123.965;
const orangePrice = 90.2345;

const usersAmount = 500;

const productsMaxPrice = Math.max(tomatoPrice, cucumberPrice, orangePrice);
console.log(`Max price is: ${productsMaxPrice}`);

const productsMinPrice = Math.min(tomatoPrice, cucumberPrice, orangePrice);
console.log(`Min price is: ${productsMinPrice}`);

const totalSumOfAllProducts = tomatoPrice + cucumberPrice + orangePrice;
console.log(`Total sum of all products is: ${totalSumOfAllProducts}`);


const tomatoPriceIntegerPart = Math.trunc(tomatoPrice);
const cucumberPriceIntegerPart = Math.trunc(cucumberPrice);
const orangePriceIntegerPart = Math.trunc(orangePrice);

const totalSumOfIntegerPartsForProducts = Math.floor(tomatoPriceIntegerPart + cucumberPriceIntegerPart + orangePriceIntegerPart);
console.log(`Total sum of all products (only integer parts) is: ${totalSumOfIntegerPartsForProducts}`);

const roundedTotalSum = Math.ceil(totalSumOfIntegerPartsForProducts / 100) * 100;
console.log(`Total sum (rounded up to hundreds) is: ${roundedTotalSum}`);

let isSumEven = undefined;
if ((totalSumOfIntegerPartsForProducts % 2) == 0) {
	isSumEven = true;
} else {
	isSumEven = false;
}
console.log(`Sum of all products (only integer parts) is even: ${isSumEven}`);

const remainderAfterPayment = usersAmount - totalSumOfAllProducts;
console.log(`Remainder after 500 grn were paid is: ${remainderAfterPayment}`);

const averageValueOfProductPrices = parseFloat((totalSumOfAllProducts/3).toFixed(2));
console.log(`Average value of products prices is: ${averageValueOfProductPrices}`);


const randomDiscountRate = Math.floor(Math.random() * 100) + 1;
console.log(`Discount is ${randomDiscountRate}`);

const discountValue = Math.floor((totalSumOfAllProducts * randomDiscountRate) / 100);
console.log(`Discount value is ${discountValue}`);

const sumToPayWithDiscount = parseFloat((totalSumOfAllProducts - discountValue).toFixed(2));
console.log(`Sum to pay (with discount) is ${sumToPayWithDiscount}`);

const costPrice = Math.trunc(totalSumOfAllProducts / 2);
console.log(`Cost price is ${costPrice}`);

const netProfit = costPrice - discountValue;
console.log(`Net profit is ${netProfit}`);