def is_odd_string(word):
    """Is the sum of the character-positions odd?

    Word is a simple word of uppercase/lowercase letters without punctuation.

    For each character, find it's "character position" ("a"=1, "b"=2, etc).
    Return True/False, depending on whether sum of those numbers is odd.

    For example, these sum to 1, which is odd:
    
        >>> is_odd_string('a')
        True

        >>> is_odd_string('A')
        True

    These sum to 4, which is not odd:
    
        >>> is_odd_string('aaaa')
        False

        >>> is_odd_string('AAaa')
        False

    Longer example:
    
        >>> is_odd_string('amazing')
        True
    """

    # use the ord() function to find the unicaode integer value of the character
    # subtract 1 to get the actual position of the first character (first char is always 0)
    # loop through the string of characters, adding the value of the integer values of the chars
    # assign the sum of those values to total variable
    # retrun true or false if the value of total % 2 == 1 (is odd) 

    DIFF = ord("a") - 1
    total = sum((ord(c) - DIFF) for c in word.lower())
    return total % 2 == 1

        

    
    
    
