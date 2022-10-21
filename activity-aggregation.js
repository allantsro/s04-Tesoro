EMPLOYEES
/* 1 */
{
    "_id" : 312456,
    "employeeName" : "Joongki Song",
    "employeeAge" : 28,
    "Job Role" : "Store Manager",
    "Salary" : 120000
}

/* 2 */
{
    "_id" : 345342,
    "employeeName" : "Joongkuk Jeon",
    "employeeAge" : 25,
    "Job Role" : "Store Associate",
    "Salary" : 45000
}

/* 3 */
{
    "_id" : 334566,
    "employeeName" : "Jin Kim",
    "employeeAge" : 35,
    "Job Role" : "Cashier",
    "Salary" : 67500
}

/* 4 */
{
    "_id" : 245345,
    "employeeName" : "Hyekyo Song",
    "employeeAge" : 40,
    "Job Role" : "Senior Cashier",
    "Salary" : 72500
}

/* 5 */
{
    "_id" : 445364,
    "employeeName" : "Tae Hyung Kim",
    "employeeAge" : 22,
    "Job Role" : "Store Associate",
    "Salary" : 35000
}


FRUITS 

/* 1 */
{
    "_id" : 71.0,
    "name" : "Kiwi",
    "supplier" : "Green Farms",
    "stock" : 25.0,
    "price" : 50.0,
    "onSale" : true
}

/* 2 */
{
    "_id" : 72.0,
    "name" : "Mango",
    "supplier" : "Yellow Co.",
    "stock" : 10.0,
    "price" : 120.0,
    "onSale" : false
}

/* 3 */
{
    "_id" : 70.0,
    "name" : "Banana",
    "supplier" : "Yellow Co.",
    "stock" : 15.0,
    "price" : 20.0,
    "onSale" : true
}

/* 4 */
{
    "_id" : 69.0,
    "name" : "Apple",
    "supplier" : "Red Farms Inc.",
    "stock" : 20.0,
    "price" : 40.0,
    "onSale" : true
}


INVENTORY 
/* 1 */
{
    "_id" : "LS0000123",
    "name" : "XYZ Chocolate Bar - 100g",
    "price" : 5.23,
    "quantity" : 25000,
    "category" : [ 
        "chocolates", 
        "sweets"
    ]
}

/* 2 */
{
    "_id" : "LS0003123",
    "name" : "Milk Non-fat - 1lt",
    "price" : 3,
    "quantity" : 1000,
    "category" : [ 
        "dairy", 
        "healthy"
    ]
}

/* 3 */
{
    "_id" : "LS0004566",
    "name" : "Eggs - 12 Pack",
    "price" : 6,
    "quantity" : 5000,
    "category" : [ 
        "poultry", 
        "generic"
    ]
}

/* 4 */
{
    "_id" : "LS0008542",
    "name" : "Whole Chicken",
    "price" : 12.59,
    "quantity" : 1250,
    "category" : [ 
        "poultry", 
        "meat"
    ]
}

/* 5 */
{
    "_id" : "LS0008543",
    "name" : "Carrots (Packed) - 250g",
    "price" : 3.5,
    "quantity" : 3000,
    "category" : [ 
        "vegetables", 
        "healthy", 
        "organic"
    ]
}

/* 6 */
{
    "_id" : "LS0009846",
    "name" : "Beans (Packed) - 250g",
    "price" : 6.75,
    "quantity" : 6000,
    "category" : [ 
        "vegetables", 
        "healthy", 
        "organic"
    ]
}

/* 7 */
{
    "_id" : "LS0009100",
    "name" : "Bell Pepper (Packed) - 250g",
    "price" : 4.95,
    "quantity" : 12000,
    "category" : [ 
        "vegetables", 
        "healthy", 
        "organic"
    ]
}

/* 8 */
{
    "_id" : "LS0002688",
    "name" : "ZZ Butter - 500g",
    "price" : 25,
    "quantity" : 500,
    "category" : [ 
        "dairy", 
        "healthy", 
        "premium"
    ]
}

PAYMENTS 

/* 1 */
{
    "_id" : "BL2021005",
    "grossAmount" : 105.65,
    "discounts" : 10,
    "netAmount" : 95.65,
    "datePayments" : ISODate("2021-01-01T16:00:00.000Z")
}

/* 2 */
{
    "_id" : "BL2021006",
    "grossAmount" : 45.25,
    "discounts" : 0,
    "netAmount" : 45.25,
    "datePayments" : ISODate("2021-01-01T16:15:55.000Z")
}

/* 3 */
{
    "_id" : "BL2021007",
    "grossAmount" : 153.33,
    "discounts" : 20.33,
    "netAmount" : 133,
    "datePayments" : ISODate("2021-01-01T16:31:08.000Z")
}

/* 4 */
{
    "_id" : "BL2021008",
    "grossAmount" : 21,
    "discounts" : 0,
    "netAmount" : 21,
    "datePayments" : ISODate("2021-01-01T20:25:52.000Z")
}

/* 5 */
{
    "_id" : "BL2021009",
    "grossAmount" : 89.72,
    "discounts" : 0.72,
    "netAmount" : 89,
    "datePayments" : ISODate("2021-01-01T08:45:12.000Z")
}

/* 6 */
{
    "_id" : "BL2021010",
    "grossAmount" : 33.5,
    "discounts" : 20.5,
    "netAmount" : 13,
    "datePayments" : ISODate("2021-01-01T11:02:35.000Z")
}

PROMO 

/* 1 */
{
    "_id" : "PROMO01",
    "name" : "Sales Promo",
    "period" : 7,
    "dailySales" : [ 
        20, 
        50, 
        12, 
        30, 
        45, 
        15, 
        60
    ]
}

/* 2 */
{
    "_id" : "PROMO02",
    "name" : "Milk Promo",
    "period" : 2,
    "dailySales" : [ 
        120, 
        200
    ]
}

/* 3 */
{
    "_id" : "PROMO03",
    "name" : "Meat Promo",
    "period" : 3,
    "dailySales" : [ 
        101, 
        205
    ]
}

/* 4 */
{
    "_id" : "PROMO04",
    "name" : "New Year Promo",
    "period" : 7,
    "dailySales" : [ 
        68, 
        88, 
        105, 
        188, 
        74, 
        278, 
        350
    ]
}