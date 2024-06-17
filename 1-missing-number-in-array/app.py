def find_missing(input):
    sum_values = 0
    sum_goal = 0
    
    for i, e in enumerate(input):
        sum_values += e
        sum_goal += i+1

    sum_goal += len(input) + 1;

    return sum_goal - sum_values;