# N^2 algorithms
def bubble_sort(nums):
    not_finished = True
    while(not_finished):
        not_finished = False
        for i in range(1, len(nums)):
            if nums[i-1] > nums[i]:
                nums[i-1], nums[i] = nums[i], nums[i-1]
                not_finished = True
    return nums
        
        
print(bubble_sort([47,53,78,23,34,8,43,7,51,1,84,42,89,0,56,31,67,94,40,26,]))