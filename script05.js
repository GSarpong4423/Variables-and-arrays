var fruits1 = ["Apple", "Peaches"];
console.log(fruits1);
fruits1[1] = "Strawberries";
fruits1.push("pumpkin")
console.log(fruits1);
fruits1.push("peppers");
fruits1.pop();


// array 1 complete

var fruits2 = ["kiwis", "oranges"];
fruits2.push("Sumo Orange");
fruits2.push("Grapes");
fruits2.shift();
fruits2[2] = "Egg Plant";

// array 2 complete

var allFruits = fruits1.concat(fruits2);
var fruitPrices = [1, 1.5, 2, 2.5, 3, 3.5];
fruitPrices.push(4);

var fruitSold = [4, 10, 2, 6, 4, 16];

for (var i = 0; i < allFruits.length; i++) {
    var fruitXTotal =  fruitPrices[i] * fruitSold[i];
     console.log("the total sales for", fruitSold[i],allFruits[i], "$" + fruitXTotal);
}