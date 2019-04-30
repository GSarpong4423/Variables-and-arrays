var myName = "Georgi";
var fruitNames = ["Apples", "Oranges","Peaches", "Plums",];
var fruitPrices = [1.99, 2.99, 3.00, 4.99];
var fruitUnitSold = [5,7,3,4];


for (var i = 0; i < 4; i++) {
    fruitTotal =  fruitPrices[i] * fruitUnitSold[i];
     console.log("the total cost for", fruitUnitSold[i],fruitNames[i], "$" + fruitTotal);
}

