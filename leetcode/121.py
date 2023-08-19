class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minimum = prices[0]
        profit = 0

        for i in range(0, len(prices)):
            if prices[i] < minimum:
                minimum = prices[i]
            elif profit < (prices[i] - minimum):
                profit = prices[i] - minimum

        return profit
