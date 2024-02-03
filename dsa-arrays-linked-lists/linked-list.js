/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** _get(idx): retrieve node at idx. */

  _get(idx) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count !== idx) {
      count += 1;
      cur = cur.next;
    }

    return cur;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
   if (this.length === 0) {
     this.tail = newNode;
   }
   this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. Throw error if index is invalid*/

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Invalid index');
    }
    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val. Throws error if index is invalid.  */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Invalid index');
    }
    let node = this._get(idx);
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. Throws error of index invalid
   * Returns undefined
  */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error('Invalid index');
    }
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let prev = this._get(idx - 1);
    
    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;
    
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, Throw error if index is invalid. */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Invalid index');
    }
    // if removing the first node
    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2 ) {
        this.tail = this.head;
      }
      return val;
    }
    let prev = this._get(idx - 1);

    // if removing the last node
    if (idx === this.length - 1) {
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }

    // if removing a middle node
    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list. */

  average() {
    if (this.length === 0) return 0;
    let total = 0;
    let current = this.head;
    while (current) {
      total += current.val;
      current = current.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
