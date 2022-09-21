def strStr(haystack, needle):
    for i in range(len(haystack)):
        j = 0
        ii = i
        while j < len(needle) and ii < len (haystack) and needle[j] == haystack[ii]:
            j+=1
            ii+=1
        if j == len(needle):
            return i
    return -1