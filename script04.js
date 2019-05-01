var carNames = ["Camry, Corolla"];
carNames.splice(0,1,"Camry","lexus");
carNames.push("Pilot");
carNames.push("Civic");
carNames.pop();

var carColor = ["Black","Red"];
carColor.push("White");
carColor.push("Green");
carColor.shift();
carColor[2] = "Blue";

var NameColor = carNames.concat(carColor);
var carPrices = [2510,5000,1200,9227,4586];
carPrices.push(7223);
var carSoldPerDay = [100,412,99,87,15];
carSoldPerDay.push(33);

for (var i = 0; i < 5; i++) {
    carTotal =  carPrices[i] * carSoldPerDay[i];
     console.log("the total sales for", carSoldPerDay[i],NameColor[i], "$" + carTotal);
}


