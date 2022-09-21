print(732//100)


def intToRoman(num):
    tens = ['M', 'C', 'X', 'I']
    fives = ['', 'D', 'L', 'V']
    answer = ""
    divider = 1000
    for i in range(4):
        nn = num // divider
        num %= divider
        if nn < 4:
            answer += tens[i]*nn
        elif nn == 4:
            answer += tens[i]+fives[i]
        elif nn < 9:
            answer += fives[i]+tens[i]*(nn-5)
        else:
            answer += tens[i]+tens[i-1]
        divider //= 10
    return answer


print(intToRoman(1997))
