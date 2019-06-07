// Stock Buy Sell to Maximize Profit
// The cost of a stock on each day is given in an array,
// find the max profit that you can make by buying and selling in those days.
// For example, if the given array is {100, 180, 260, 310, 40, 535, 695},
// the maximum profit can earned by buying on day 4, selling on day 6 (655).
// If the given array of prices is sorted in decreasing order, then profit cannot be earned at all.

// Brute force

// function maxProfit (prices) {
//   let profit = 0
//   prices.forEach((price, i) => {
//     let highestPrice = Math.max(...prices.slice(i + 1))
//     let currProfit = highestPrice - price

//     if (currProfit > profit) {
//       profit = currProfit
//     }
//   })

//   return profit
// }

// Optimized solution

function maxProfit(prices) {
  let minprice = Infinity
  let maxprofit = 0

  prices.forEach(price => {
    if (price < minprice) {
      minprice = price
    } else if (price - minprice > maxprofit) {
      maxprofit = price - minprice
    }
  })
  // console.log('minprice: ', minprice, '// maxprofit: ', maxprofit)
  return maxprofit
}
