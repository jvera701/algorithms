# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        pPath = self.findPath(p, root, [])
        qPath = self.findPath(q, root, [])

        for i in range(len(pPath) - 1, -1, -1):
            element = pPath[i]
            for e in qPath:
                if e.val == element.val:
                    return element

    def findPath(self, p, curr, lis):
        newList = [*lis, curr]
        if curr.val == p.val:
            return newList
        if curr.left != None:
            valLeft = self.findPath(p, curr.left, newList)
            if valLeft != None:
                return valLeft
        if curr.right != None:
            valRight = self.findPath(p, curr.right, newList)
            if valRight != None:
                return valRight
