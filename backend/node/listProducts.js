var faker = require("faker");

function createProductList(num) {
    var products = [],
        product,
        pair;

	//using the faker package create num amount of fake products and prices
    for (var i = 0; i < num; i++) {
        product = faker.commerce.productName();
        
	price = faker.commerce.price();
	//store each fake product and price as an object in an array        
	pair = {
            productName: product,
            price: price
        }
        products.push(pair);
    }
    return products;
}

function fakeStore(num, storeName) {
	//print out a fake store item list
    var productList = createProductList(num);

    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("Welcome to " + storeName + "!");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");


    productList.forEach(function (element) {
        console.log(element.productName + " - $" + element.price);
    });
}

fakeStore(10, "Cailyn's Kooky Emporium");
