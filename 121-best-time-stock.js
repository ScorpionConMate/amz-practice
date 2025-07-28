const data = require("./121-input");
/**
 *
 * @param {number[]} prices
 * @returns {number}
 */
function maxProfit(prices) {
  let profit = 0;
  for (let index = 0; index < prices.length; index++) {
    // Valor actual para comprar
    const buyOn = prices[index];

    // Si no tiene un valor mas alto en los dias siguientes, continuamos con el siguiente elemento del array
    const haveGreater = Math.max(...prices.slice(index + 1));
    if (haveGreater <= buyOn) continue;
    // Revisamos el profit actual
    const currentProfit = haveGreater - buyOn;
    // Si el profit actual, es mayor al que teniamos, actualizamos el profit
    if (currentProfit > profit) profit = currentProfit
  }

  return profit;
}

// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5

// Explanation: In this case, no transactions are done and the max profit = 0.
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit(data));