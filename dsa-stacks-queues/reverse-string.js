class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
    enqueue(value) {
      const newNode = { value, next: null };
      if (!this.front) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
    }
  
    dequeue() {
      if (!this.front) {
        return null;
      }
  
      const removedNode = this.front;
      if (this.front === this.rear) {
        this.front = null;
        this.rear = null;
      } else {
        this.front = this.front.next;
      }
  
      return removedNode.value;
    }
  
    isEmpty() {
      return !this.front;
    }
  }
  
  function reverseStringUsingQueue(inputString) {
    const queue = new Queue();
  
    // Enqueue each character of the input string
    for (let i = 0; i < inputString.length; i++) {
      queue.enqueue(inputString[i]);
    }
  
    let reversedString = '';
  
    // Dequeue each character to reverse the order
    while (!queue.isEmpty()) {
      reversedString += queue.dequeue();
    }
  
    return reversedString;
  }
  
  // Example usage
  const originalString = "Hello, World!";
  const reversedString = reverseStringUsingQueue(originalString);
  
  console.log(`Original String: ${originalString}`);
  console.log(`Reversed String: ${reversedString}`);
  