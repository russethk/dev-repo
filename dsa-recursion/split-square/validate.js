/* is_valid(s) returns true if and only if s is a valid split-square string. */
// A valid split-square string is either 0 or 1, or an array of 4 valid split-square strings.

function is_valid(s) {
    if (s === 0 || s === 1) {
        return true;
    }

    if (Array.isArray(s) && s.length === 4) {
        // Array.every(fn) = for every item in array, is fn(item) true?
        // returns true if every item in array is true, otherwise false
        return s.every(is_valid);
    }
    return false;
}

module.exports = is_valid;
    

    