def divide(dividend, divisor):
    sign = (dividend > 0) ^ (divisor > 0)  # XOR
    dividendo = abs(dividend)
    divisore = abs(divisor)
    running = ans = 0
    sumando = divisore
    step = 1
    while running < (dividendo - divisore + 1):
        running += sumando
        ans += step
        sumando += sumando
        step += step
        if running > dividendo:
            step = 1
            sumando = divisore
        while running > dividendo:
            running -= sumando
            ans -= step
            sumando += sumando
            step += step
            if running <= dividendo:
                step = 1
                sumando = divisore

    if sign:
        return -min(2147483648, ans)
    return min(2147483647, ans)


print(divide(897487563, 5))


def divide_recursively(dividend, divisor):
    sign = (dividend < 0) ^ (divisor < 0)
    dividend = abs(dividend)
    divisor = abs(divisor)

    def recur_div(a, b):
        ''' recursively calculate a//b'''
        if a < b:
            return 0
        n = 1
        cur = b
        while cur + cur <= a:
            cur += cur
            n += n
        return n + recur_div(a-cur, b)

    n = recur_div(dividend, divisor)

    if sign:
        return -min(2147483648, n)
    else:
        return min(2147483647, n)


print(divide_recursively(897487563, 5))
