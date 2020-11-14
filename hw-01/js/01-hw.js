const TOMATO_PRICE = 15.678;
const CUCUMBER_PRICE = 123.965;
const ORANGE_PRICE = 90.2345;

const USER_AMOUNT = 500;

const PRODUCT_MAX_PRICE = Math.max(TOMATO_PRICE, CUCUMBER_PRICE, ORANGE_PRICE);
console.log(`Max price is: ${PRODUCT_MAX_PRICE}`);

const PRODUCT_MIN_PRICE = Math.min(TOMATO_PRICE, CUCUMBER_PRICE, ORANGE_PRICE);
console.log(`Min price is: ${PRODUCT_MIN_PRICE}`);

const TOTAL_SUM_OF_ALL_PRODUCTS = TOMATO_PRICE + CUCUMBER_PRICE + ORANGE_PRICE;
console.log(`Total sum of all products is: ${TOTAL_SUM_OF_ALL_PRODUCTS}`);


const TOMATO_PRICE_INTEGER_PART = Math.trunc(TOMATO_PRICE);
const CUCUMBER_PRICE_INTEGER_PART = Math.trunc(CUCUMBER_PRICE);
const ORANGE_PRICE_INTEGER_PART = Math.trunc(ORANGE_PRICE);

const TOTAL_SUM_OF_INTEGER_PARTS_FOR_PRODUCTS = Math.floor(TOMATO_PRICE_INTEGER_PART + CUCUMBER_PRICE_INTEGER_PART + ORANGE_PRICE_INTEGER_PART);
console.log(`Total sum of all products (only integer parts) is: ${TOTAL_SUM_OF_INTEGER_PARTS_FOR_PRODUCTS}`);

const ROUNDED_TOTAL_SUM = Math.ceil(TOTAL_SUM_OF_INTEGER_PARTS_FOR_PRODUCTS / 100) * 100;
console.log(`Total sum (rounded up to hundreds) is: ${ROUNDED_TOTAL_SUM}`);

let isSumEven;
if ((TOTAL_SUM_OF_INTEGER_PARTS_FOR_PRODUCTS % 2) === 0) {
	isSumEven = true;
} else {
	isSumEven = false;
}
console.log(`Sum of all products (only integer parts) is even: ${isSumEven}`);

const REMAINDER_AFTER_PAYMENT = USER_AMOUNT - TOTAL_SUM_OF_ALL_PRODUCTS;
console.log(`Remainder after 500 grn were paid is: ${REMAINDER_AFTER_PAYMENT}`);

const AVERAGE_VALUE_OF_PRODUCT_PRICES = parseFloat((TOTAL_SUM_OF_ALL_PRODUCTS/3).toFixed(2));
console.log(`Average value of products prices is: ${AVERAGE_VALUE_OF_PRODUCT_PRICES}`);


const RANDOM_DISCOUNT_RATE = Math.floor(Math.random() * 100) + 1;
console.log(`Discount is ${RANDOM_DISCOUNT_RATE} %`);

const DISCOUNT_VALUE = Math.floor((TOTAL_SUM_OF_ALL_PRODUCTS * RANDOM_DISCOUNT_RATE) / 100);
console.log(`Discount value is ${DISCOUNT_VALUE}`);

const SUM_TO_PAY_WITH_DISCOUNT = parseFloat((TOTAL_SUM_OF_ALL_PRODUCTS - DISCOUNT_VALUE).toFixed(2));
console.log(`Sum to pay (with discount) is ${SUM_TO_PAY_WITH_DISCOUNT}`);

const COST_PRICE = Math.trunc(TOTAL_SUM_OF_ALL_PRODUCTS / 2);
console.log(`Cost price is ${COST_PRICE}`);

const NET_PROFIT = COST_PRICE - DISCOUNT_VALUE;
console.log(`Net profit is ${NET_PROFIT}`);