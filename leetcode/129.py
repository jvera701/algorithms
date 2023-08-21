# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        def getNumber(node: Optional[TreeNode], total: str) -> int :
            newTotal = total + str(node.val)
            if node.left is None and node.right is None:
                return int(newTotal)
            
            right = 0 if node.right is None else getNumber(node.right, newTotal)
            left = 0 if node.left is None else getNumber(node.left, newTotal)
            
            return left + right

        return getNumber(root, '')