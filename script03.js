var fruitNames = ["Mango", "Pineapple"];
fruitNames[1] = "Apple";
fruitNames.unshift("Oranges");
fruitNames.unshift("Cherries");
fruitNames.pop();

var fruitNames02 = ["watermelon", "passionfruit"];
fruitNames02.unshift("plum");
fruitNames02.unshift("peaches");
fruitNames02.shift();
fruitNames02[2] = "Grapes";

var NewfruitNames = fruitNames02.concat(fruitNames);
var fruitPrices = [2.99, 3, 4.50, 6.75, 7,];
fruitPrices.unshift(8);
var fruitUnitSold01= [5,7,3,4,9];
fruitUnitSold01.unshift(6);

for (var i = 0; i < 5; i++) {
    fruitTotal =  fruitPrices[i] * fruitUnitSold01[i];
     console.log("the total sales for", fruitUnitSold01[i],NewfruitNames[i], "$" + fruitTotal);
}