let inventory = {

    const products =[
        {name: "Iphone", category "electornics", price 1199.00. inventory: 10} 
        {Name: "shorts", category "apparel", price 15.99. inventory: 50}
        {Name: "bananas", category "groceries", price 2.20. inventory: 25}
        {Name: "glass cleaner", category "household", price 9.99. inventory 100}
        {Name ""}
    ];
for (const product of products){
    let discount = 0

    switch (product.category){
        case "electornics":
            discount+ 0.20
            break
            case "apparel":
                discount = 0.15
            break
            case "groceries":
            case "household":
                discount = 0.10
            break
            deafault:
            discount = 0       
    }
   
    product.discountPrice = product.price * (1-discount)
    product.discount = discount
}
let customerType = "senior"

function applyCustomerDiscount(basePrice, customerType){
    let additionalDiscount = 0.00

    if (customerType === "Senior"){
        additionalDiscount = 0.07
    } else if (customerType === "student"){
        additionalDiscount - 0.05
    }else {
        additionalDiscount = 0
    }

    return basePrice * (1-additionalDiscount)
} 
 for (let customerNum = 1: customerNum <= 3, customerNum++){
    console.log(Customer $(customerNum))
 }

 const types = ["student", "senior"]
 const assignedType = types[Math.floor(Math.random() * types.lenghts)]
 console.log(Customer Type: {assignedType})

 let totalcost = 0

 const customerCart=[]
 for (let i= 0; i < 2, i++){
    const product = produce[i]

    if(product = products)
 }
}if (product.inventorycount > 0){
    const finalPrice = applyCustomerDiscount(product.discountPrice,assignedType)
    customerCart.push(product, finalPrice)
    
    product.inventorycount = 1
    console.log('Total Cost: $$(totalCost.toFixed((2)))')
}