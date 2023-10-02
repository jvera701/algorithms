from collections import deque

class Solution:
    def isValid(self, s: str) -> bool:
        stack = deque()
        for l in s:
            if l == '(' or l == '{'  or l == '[':
                stack.append(l)
            else:
                if len(stack) !=  0 :
                    element = stack.pop()
                    if (l == ')' and element == '(') or (l == '}' and element == '{') or (l == ']' and element == '['):
                        continue
                    else:
                        return False
                else:
                    return False
        
        if len(stack) !=  0 :
            return False
        return True