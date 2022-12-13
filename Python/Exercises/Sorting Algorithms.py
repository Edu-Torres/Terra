import time
import random

# N^2 algorithms
def bubble_sort(nums):
    not_finished = True
    while (not_finished):
        not_finished = False
        for i in range(1, len(nums)):
            if nums[i-1] > nums[i]:
                nums[i-1], nums[i] = nums[i], nums[i-1]
                not_finished = True
    return nums


def selection_sort(nums):
    last = len(nums) - 1
    left = 0
    while (left < last):
        smallest = (left, nums[left])
        for i, n in enumerate(nums[left+1: last+1], left+1):
            if n < smallest[1]:
                smallest = (i, n)
        nums[left], nums[smallest[0]] = smallest[1], nums[left]
        left += 1
    return nums


def insertion_sort(nums):
    left = -1
    for i, n in enumerate(nums):
        place = left
        while (place >= 0 and n < nums[place]):
            place -= 1
        del nums[i]
        nums.insert(place + 1, n)
        left += 1
    return nums

# N(log(N))
def merge_sort(nums):
    half = len(nums) // 2
    if half == 0: 
        return nums
    left = merge_sort(nums[:half])
    right = merge_sort(nums[half:])
    ans = []
    r = l = 0
    while True:
        if right[r] < left[l]:
            ans.append(right[r])
            r += 1
            if r == len(right):
                ans.extend(left[l:])
                break
        else:
            ans.append(left[l])
            l += 1    
            if l == len(left):
                ans.extend(right[r:])
                break
    return ans

# 15k random numbers
random_list = random.sample(range(100000), 15000)
print("Random numbers generated")
s = time.perf_counter()
bubble_sort(random_list)
print("bubble_sort: ", time.perf_counter()-s)

s = time.perf_counter()
selection_sort(random_list)
print("selection_sort: ", time.perf_counter()-s)

s = time.perf_counter()
insertion_sort(random_list)
print("insertion_sort: ", time.perf_counter()-s)

s = time.perf_counter()
merge_sort(random_list)
print("merge_sort: ", time.perf_counter()-s)
