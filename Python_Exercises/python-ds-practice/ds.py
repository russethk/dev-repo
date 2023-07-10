
def gen_board(size, initial_val=None):
    return [[initial_val for x in range(size)] for y in range(size)]

[x for x in range(10)]

[x for x in range(10) if x % 2 == 0]

[x * 2  for x in range(10) if x % 2 == 0]

scores = [55, 89, 99, 87, 60, 70, 74, 76, 90, 50, 82]
grades = ['PASS' if score >= 70 else "FAIL" for score in scores]



