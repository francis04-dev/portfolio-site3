let itemname = String "USB-C Cable";
let unitCost = 15.00;
let currentStock = 250;
let reorderLevel = 50;
let targetStock = 450;
let supplierleaderTimeWeeks = 2;

let weeksofcover = weeklydemand > 0 ? currentStock / weeklydemand : Infinity;
let stockdeficit = Math.max(0, targetStock - currentStock);
let reorderquantity = (currentStock <= reorderLevel weeksofcover < supplierleaderTimeWeeks) ? Math.ceil(stockdeficit) : 0;
let estimatedreordercost = reorderquantity * unitCost;
let reordernow (Boolean): currentStock <= reorderLevel && weeksofcover < supplierleaderTimeWeeks;

console.log("Item Name: " + itemname);
console.log("Weeks of Cover: " + weeksofcover.toFixed(2));
console.log("Reorder Quantity: " + reorderquantity);
console.log("Estimated Reorder Cost: " + estimatedreordercost.toFixed(2));
console.log("Reorder Now: " + reordernow);