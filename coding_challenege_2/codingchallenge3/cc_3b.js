cost inventory = {

    sku: 'sku-001'
    name: 'kia forte gt',
    costPerUnit: 35000,
    quantity: 10
    };
    sku: 'sku-002'
    name: 'kia forte ex',
    costPerUnit: 25000,
    quantity: 15
    }; 
    sku: 'sku-003'
    name: 'kia forte lx',
    costPerUnit: 20000,
    quantity: 20
    };
    sku: 'sku-004'
    name: 'kia forte fe',
    costPerUnit: 15000,
    quantity: 25
    };
inventory.forEach(function(item) {
    console.log(
        "SKU: " + item.sku + ", Name: " + item.name + ", Cost per Unit: " + item.costPerUnit + ", Quantity: " + item.quantity
    )
})



