/** choose a random item. */
function choice(items) {
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

/** return copy of arr w/o item. 
 * 
 * removes the first matching item from items, if item exists, 
 * and returns it. 
 * 
 * If the item doesn't exist, return undefined.
*/

function remove(item, items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
        return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
}

export { choice, remove };