boot = [2, 4, 6, 1, 3, 7]
process = [1, 2, 2, 1, 3, 1]


def largestCluster(boot, process, maxPower):
    l = r = 0
    sumBoot = 0
    sumProcess = 0
    k = 0
    # Sliding Window
    while r < len(boot):
        # Slide to the right r++
        sumBoot = max(sumBoot, boot[r])
        sumProcess += process[r]
        power = sumBoot + sumProcess * (r - l + 1)

        # Slide to the left l++
        while power > maxPower and l <= r:
            l += 1
            if boot[l-1] == sumBoot:
                sumBoot = max(boot[l:r+1])
            sumProcess -= process[l-1]
            power = sumBoot + sumProcess * (r - l + 1)
        # print("from: " + str(l) + " to " + str(r) +"\n"+ "Boot: "+str(sumBoot)+
        # " sumProcess: " + str(sumProcess)+" Power: " + str(power)+"\n")
        k = max(k, r - l + 1)
        r += 1

    return k


print(largestCluster(boot, process, 12))
