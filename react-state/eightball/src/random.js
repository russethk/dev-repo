/** Return a random item from a list. */

function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

export { choice };

// Path: eightball/src/EightBall.js