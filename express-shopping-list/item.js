/** Item in a shopping cart. */

const items = require("../fakeDb");

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    // keep track of all items
    items.push(this);
  }

  static findAll() {
    return items;
  }

    /** Find & return item with matching name. */
  static find(name) {
    const foundItem = items.find(item => item.name === name);
    if (foundItem === undefined) {
      throw { message: "Not Found", status: 404 };
    }
    return foundItem;
  }

  // update item with matching name to data

  static update(name, data) {
    let foundItem = Item.find(name);
    if (foundItem === undefined) {
      throw { message: "Not Found", status: 404 };
    }
    foundItem.name = data.name;
    foundItem.price = data.price;
    return foundItem;
  }

  static remove(name) {
    const foundIdx = items.findIndex(item => item.name === name);
    if (foundIdx === -1) {
      throw { message: "Not Found", status: 404 };
    }
    items.splice(foundIdx, 1);
  }
}

module.exports = Item;