def print_upper_words(words):
    """Print each word on seperate line, uppercased.

        >>> print_upper_words(["hello", "hey", "goodbye", "yo", "yes"]
        HELLO
        HEY
        GOODBYE
        YO
        YES
    """

    for word in words:
        print(word.upper())



    
        
def print_upper_words2(words):

    """Print only the words that start with e, each on a separate line, in uppercase.

        >>> print_upper_words2(["Eagle", "frog", "elephant", "giraffe", "Excellent"])
        EAGLE
        ELEPHANT
        EXCELLENT
    """

    for word in words:
        if word.startswith("e") or word.startswith("E"):
            print(word.upper())

        

print_upper_words2(["Eagle", "frog", "elephant", "giraffe", "Excellent"])





def print_upper_words3(words, must_start_with):

    """Print each word on a separate line, in uppercase, if it starts with one of given letters

        >>> print_upper_words3(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with={"h", "y"})
        HELLO
        HEY
        YO
        YES
    """

    for word in words:
        for letter in must_start_with:
            if word.startswith(letter):
                print(word.upper())
                break
            

        
print_upper_words3(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with={"h", "y"})
                   


