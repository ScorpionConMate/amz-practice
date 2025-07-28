const data = require("./121-input");
/**
 *
 * @param {number[]} prices
 * @returns {number}
 */
function maxProfit(prices) {
  let profit = [];
  for (let index = 0; index < prices.length; index++) {
    const buyOn = prices[index];
    const haveGreater = Math.max(...prices.slice(index + 1));
    if (haveGreater <= buyOn) continue;
    profit.push(haveGreater - buyOn);
  }

  return profit.length > 0 ? Math.max(...profit) : 0;
}

// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5

// Explanation: In this case, no transactions are done and the max profit = 0.
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit(data));
/* (async () => {
    const data = await readFile('./121-input.json');

    console.log(maxProfit(data))
})() */
