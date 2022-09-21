def convert(s: str, numRows: int) -> str:
    if numRows == 1:
        return s
    answer = [""]*numRows
    for i, letter in enumerate(s):
        mod = i % (numRows-1)
        phase = i // (numRows-1)
        if phase % 2 == 0:
            answer[mod] += letter
        else:
            answer[numRows-1-mod] += letter
    return "".join(answer)


print(convert("Eduardo", 2))


def convertSlower(s: str, numRows: int) -> str:
    if numRows == 1:
        return s
    answer = [[] for _ in range(numRows)]
    for i, letter in enumerate(s):
        mod = i % (numRows-1)
        phase = i // (numRows-1)
        if phase % 2 == 0:
            answer[mod].append(letter)
        else:
            answer[numRows-1-mod].append(letter)

    return "".join("".join(x) for x in answer)
