# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        first = ''
        while l1 != None:
            first += str(l1.val)
            l1 = l1.next

        second = ''
        while l2 != None:
            second += str(l2.val)
            l2 = l2.next

        firstReversed = first[::-1]
        secondReversed = second[::-1]
        revAnswer = str(int(firstReversed) + int(secondReversed))[::-1]
        answer = ListNode()
        first = answer
        for char in revAnswer:
            if answer.val == None:
                answer.val = int(char)
            else:
                nexts = ListNode(int(char))
                answer.next = nexts
                answer = nexts

        return first.next
