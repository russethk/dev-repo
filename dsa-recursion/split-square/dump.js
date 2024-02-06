/*  dump(s) - returns a split-square object as a string */

function dump(s) {
    if (s === 0 || s === 1) {
        return s.toString();

    } else {
// Array.map(fn) - returns a new array with the results of calling a provided function on every element in this array.
// returns new array of [fn(s[0]), fn(s[1]), ...]  

    return s.map(dump).join(' ');
    }

}