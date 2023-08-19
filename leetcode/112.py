# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # DFS solution
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if root is None:
            return False
        # It doesn't have a child and it's value is equal to targetSum
        if root.val == targetSum and root.left is None and root.right is None:
            return True
        left = root.left if root.left is not None else None
        right = root.right if root.right is not None else None
        return self.hasPathSum(left, targetSum - root.val) or self.hasPathSum(right, targetSum - root.val)