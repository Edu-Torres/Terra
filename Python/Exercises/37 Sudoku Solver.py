def solveSudoku(board):
    def checkRow(row,  board):
        nums = set(board[row])
        return nums.difference('.')

    def checkCol(col, board):
        nums = set()
        for b in board:
            nums.add(b[col])
        return nums.difference('.')

    def checkSquare(index, board):  # index 1 to 8
        nums = set()
        for row in range((index // 3) * 3, (index // 3) * 3 + 3):
            for col in range((index % 3) * 3, (index % 3) * 3 + 3):
                nums.add(board[row][col])
        return nums.difference('.')

    def nextAnsCell(r, c):
        ans = allNumbers.difference(columns[c])
        ans = ans.difference(rows[r])
        ans = ans.difference(squares[(r // 3) * 3 + (c // 3)])
        return ans

    def placeNumber(r, c, n):
        board[r][c] = n
        columns[c].add(n)
        rows[r].add(n)
        squares[(r // 3) * 3 + (c // 3)].add(n)
        goBack.append((r, c))

    def reverse():
        r, c = goBack.pop()
        current = board[r][c]
        board[r][c] = '.'
        columns[c].remove(current)
        rows[r].remove(current)
        squares[(r // 3) * 3 + (c // 3)].remove(current)
        ans = nextAnsCell(r, c)
        ans = [x for x in ans if x > current]
        if len(ans) == 0:
            r, c = reverse()
        else:
            placeNumber(r, c, min(ans))
        return (r, c)

    allNumbers = {"1", "2", "3", "4", "5", "6", "7", "8", "9"}

    columns = {}
    for i in range(9):
        columns[i] = checkCol(i, board)

    rows = {}
    for i in range(9):
        rows[i] = checkRow(i, board)

    squares = {}
    for i in range(9):
        squares[i] = checkSquare(i, board)

    goBack = []
    r = 0
    while r < 9:
        c = 0
        while c < 9:
            if board[r][c] == '.':
                ans = nextAnsCell(r, c)
                if len(ans) == 0:
                    r, c = reverse()  # [x for x in ans if x > board]
                else:
                    placeNumber(r, c, min(ans))
            c += 1
        r += 1
    return board


print(solveSudoku(
    [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".",
                                                                                                                                                                                                  "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
))
