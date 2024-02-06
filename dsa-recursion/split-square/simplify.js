/* simplify(s) - simplify redundant splits in a split square string. */

function simplify(s) {

    // base case. This is already just an integer, so it's already simplified.
    if (s === 0 || s === 1) return s;
    
    // recursively simplify all quadrants
    s = s.map(simplify);

    // if all four are the same integer, we can simplify.
    if (Number.isInteger(s[0]) && s.every(x => x === s[0]))  return s[0];

    return s;
}


