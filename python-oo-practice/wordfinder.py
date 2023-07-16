

"""Word Finder: finds random words from a dictionary."""

import random


class WordFinder:

    """Machine for finding random words from a dictionary.

    >>> wf = WordFinder("simplewords.txt")
    3 words read

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random()
    'cat'

    >>> wf.random()
    'cat'

    >>> wf.random()
    'porcupine'

    >>> wf.random()
    'dog'
    """


    # init method
    def __init__(self, filename):

        dict_file = open(filename)
        
        self.words = self.parse(dict_file)

        print(f"{len(self.words)} words read")

    # parse dictionary file method
    def parse(self, dict_file):
       
        return [w.strip() for w in dict_file]

    # random method
    def random(self):
        return random.choice(self.words)
    
    
class SpecialWordFinder(WordFinder):
    """Specialized WordFinder that excludes blank lines/comments.

    >>> swf = SpecialWordFinder("complex.txt")
    4 words read

    >>> swf.random() in ["kale", "parsnips", "apple", "mango"]
    True

     >>> swf.random() in ["kale", "parsnips", "apple", "mango"]
    True

     >>> swf.random() in ["kale", "parsnips", "apple", "mango"]
    True

     >>> swf.random() in ["kale", "parsnips", "apple", "mango"]
    True

    """

    def parse(self, dict_file):
         """Parse dict_file -> list of words, skipping blanks/comments."""

         return [w.strip() for w in dict_file
                 if w.strip() and not w.startswith("#")]
        

              
