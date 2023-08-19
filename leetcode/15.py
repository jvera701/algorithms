def convert(sets):
    ans = []
    for i in sets:
        ans.append([i[0], i[1], i[2]])
    return ans


class Solution:
    def threeSum(self, nums: [int]) -> [[int]]:
        nums.sort()
        answer = set()
        lookDict = {}
        for i in range(len(nums)):
            lookDict[nums[i]] = i
        for i in range(0, len(nums)):
            for j in range(i+1, len(nums)):
                toFind = (nums[i]+nums[j]) * -1
                if (toFind in lookDict and lookDict[toFind] > j):
                    tupleAnswer = (nums[i], nums[j], toFind)
                    tupleAnswer = sorted(tupleAnswer)
                    answer.add(tuple(tupleAnswer))
        return convert(answer)
