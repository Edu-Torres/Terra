def isPalindrome(self, x: int) -> bool:
    x = str(x)
    a = x[:len(x)//2]
    x = x[-1:-(len(x)//2+1):-1]
    print(x)
    return x == a
