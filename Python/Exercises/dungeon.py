
def calculateMinimumHP(dungeon) -> int:
    answers=[]
    for dun in dungeon:
        answers.append([])
        for d in dun:
            answers[-1].append((0, float('-inf'))) # current sum, lowest historic sum
            if (len(answers) > 1):
                answers[-1][-1] = update_cell(answers[-2][-1], d)
            if (len(answers[-1]) > 1):
                answers[-1][-1] = compare(answers[-1][-1], update_cell(answers[-1][-2], d))
    return answers[-1][-1]
    
    
def update_cell(historic, value):
    current_sum = historic[0]+value
    lowest=min(current_sum, historic[1])
    return (current_sum, lowest)
    

def compare(one, two):
    if one[1]>two[1]:
        return one
    return two
        
        
        
print(calculateMinimumHP([[-2,-3,3],[-5,-10,1],[10,30,-5]]))