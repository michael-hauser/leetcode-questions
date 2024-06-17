def check_two_sum(A, val):
    foundValues = {}
    for i, a in enumerate(A):
        if(val - a in foundValues): 
            return True
        else: 
            foundValues[a] = True
    
    return False