class Solution:
    def reverseWords(self, s: str) -> str:
        trimmed = s.strip()

        while '  ' in trimmed:
            trimmed = trimmed.replace('  ', ' ')
        
        arr = trimmed.split(' ')
        arr.reverse()

        return ' '.join(arr)