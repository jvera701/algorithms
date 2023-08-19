# TODO: optimize solution

def knight_path(start, end):
    queue = [(start, [start])]
    visited = []

    while queue:
        first = queue.pop(0)
        s, path = first[0], first[1]
        if s == end:
            return path
        options = [(s[0]+1, s[1] + 2), (s[0]-1, s[1] + 2), (s[0] - 2, s[1] + 1), (s[0] - 2, s[1] - 1),
                   (s[0] + 2, s[1] + 1), (s[0] + 2, s[1] - 1), (s[0] + 1, s[1] - 2), (s[0]-1, s[1] - 2),]

        for tup in options:
            if tup not in visited:
                inner = path.copy()
                inner.append(tup)
                queue.append((tup, inner))

                visited.append(tup)
