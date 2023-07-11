def frequency_count(collection):

    numcount = {}

    for x in collection:
        numcount[x] = numcount.get(x, 0) + 1

    return numcount
    




def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """

    return frequency_count(str(num1)) == frequency_count(str(num2))

    
