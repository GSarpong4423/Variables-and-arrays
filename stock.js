var stockNames = ["apple", "Uber", "SweetGreens", "Nike", "Gold"];
var stockSymbols = ["AAPL","CCEP", "SWGS", "NKE", "GLD"];
var currentPrices = [221, 50.33, 127, 85.70, 553];
var shareVolume = [4000, 8000, 9923, 1593, 7067 ];

for (var i = 0; i < stockNames.length; i++) {
    var totalRevenue =  shareVolume[i] * currentPrices[i];
     console.log(shareVolume[i], "shares of", stockNames[i], "traded yesterday at a price of $" + currentPrices[i].toFixed(2), "for a total of $" + totalRevenue.toFixed(i));
}
