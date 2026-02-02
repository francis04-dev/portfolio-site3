let product_name = "sillystring";
let costperunit = 3.25;
let baseprice = 8.99;
let discountRate = 0.10; // 10% discount
let salestaxRate = 0.07; // 7% tax
let fixedmonthlycost = 1500

let discountedPrice = baseprice * (1 - discountRate);
let finalPrice = discountedPrice * (1 + salestaxRate);
let profitperunit = finalPrice - costperunit;
let breakevenUnits = Math.ceil(fixedmonthlycost / profitperunit);
let isprofitable = profitperunit > 0;

console.log("Product Name: " + product_name);
console.log("Discounted Price (before tax): " + discountedPrice.toFixed(2));
console.log("Final Price (after tax): " + finalPrice.toFixed(2));
console.log("Profit per unit: " + profitperunit.toFixed(2));
console.log("Breakeven Units: " + breakevenUnits);
console.log("Is Profitable: " + isprofitable);4