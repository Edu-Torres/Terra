def permuteUnique(nums):
    ans = []
    def helper(numbers, perm):
        if len(numbers) == 0:
            ans.append(perm)
            return
        uniques = set(numbers)
        for u in uniques:
            new_numbers = numbers.copy()
            new_numbers.remove(u)
            new_perm = perm.copy()
            new_perm.append(u)
            helper(new_numbers, new_perm)
        
    helper(nums, [])
    return ans

print(permuteUnique([3, 6, 8, 2]))