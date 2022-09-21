def longestCommonPrefix(strs):
    ans = strs.pop(0)
    for word in strs:
        i = 0
        ans = ans[:len(word)]
        while i < len(ans) and i < len(word):
            if ans[i] != word[i]:
                ans = ans[:i]
                break
            i += 1
    return ans
