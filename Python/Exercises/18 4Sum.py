def fourSumMy(nums, target):
    answers = []
    nums.sort()
    l = len(nums)
    i = 0
    while i < l - 3:
        j = i+1
        while j < l - 2:
            suma = nums[i] + nums[j]
            buscamos = target - suma
            start = j + 1
            end = len(nums) - 1
            while start < end:
                if nums[start] + nums[end] < buscamos:
                    start += 1
                elif nums[start] + nums[end] > buscamos:
                    end -= 1
                else:
                    answers.append([nums[i], nums[j], nums[start], nums[end]])
                    past = nums[start]
                    while start < end and nums[start] == past:
                        start += 1
            past = nums[j]
            while j < l - 2 and past == nums[j]:
                j += 1
        past = nums[i]
        while i < l - 3 and past == nums[i]:
            i += 1
            
    return answers
                        

def fourSum(nums, target):

    def kSum(nums, target, k):
        res = []
        
        # If we have run out of numbers to add, return res.
        if not nums:
            return res
        
        # There are k remaining values to add to the sum. The 
        # average of these values is at least target // k.
        average_value = target // k
        
        # We cannot obtain a sum of target if the smallest value
        # in nums is greater than target // k or if the largest 
        # value in nums is smaller than target // k.
        if average_value < nums[0] or nums[-1] < average_value:
            return res
        
        if k == 2:
            return twoSum(nums, target)

        for i in range(len(nums)):
            if i == 0 or nums[i - 1] != nums[i]:
                for subset in kSum(nums[i + 1:], target - nums[i], k - 1):
                    res.append([nums[i]] + subset)

        return res

    def twoSum(nums, target):
        res = []
        lo, hi = 0, len(nums) - 1

        while (lo < hi):
            curr_sum = nums[lo] + nums[hi]
            if curr_sum < target or (lo > 0 and nums[lo] == nums[lo - 1]):
                lo += 1
            elif curr_sum > target or (hi < len(nums) - 1 and nums[hi] == nums[hi + 1]):
                hi -= 1
            else:
                res.append([nums[lo], nums[hi]])
                lo += 1
                hi -= 1
                                                        
        return res

    nums.sort()
    return kSum(nums, target, 4)

fourSum([1,0,-1,0,-2,2], 0)


def fourSum3(nums, target):
    answers = []
    nums.sort()
    l = len(nums)
    i = 0
    while i < l - 3:
        j = i+1
        while j < l - 2:
            suma = nums[i] + nums[j]
            buscamos = target - suma
            start = j + 1
            end = len(nums) - 1
            while start < end:
                if (nums[start] + nums[end] < buscamos) or (start>j+1 and nums[start] == nums[start-1]):
                    start += 1
                elif (nums[start] + nums[end] > buscamos) or (end<len(nums) - 1 and nums[end] == nums[end+1]):
                    end -= 1
                else:
                    answers.append([nums[i], nums[j], nums[start], nums[end]])
                    start+=1
                    end-=1
            past = nums[j]
            while j < l - 2 and past == nums[j]:
                j += 1
        past = nums[i]
        while i < l - 3 and past == nums[i]:
            i += 1
            
    return answers

fourSum3([1,0,-1,0,-2,2], 0)