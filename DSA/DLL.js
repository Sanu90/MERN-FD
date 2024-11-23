class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Empty");
    } else {
      let prev = this.head;
      let showData = "";
      while (prev) {
        showData += `${prev.value}-`;
        prev = prev.next;
      }
      console.log("LL is-->", showData);
      //console.log(this.head);
    }
  }

  reverse() {
    if (this.isEmpty()) {
      console.log("Empty list");
    } else {
      let curr = this.tail;
      let showReverse = "";
      while (curr) {
        showReverse += `${curr.value}-`;
        curr = curr.prev;
      }
      console.log(showReverse);
    }
  }

  remove(value) {
    if (this.isEmpty()) {
      return `empty list`;
    }
    let removeNode;
    let current = this.head;
    while (current.next && current.next.value != value) {
      current = current.next;
    }
    if (current.next) {
      removeNode = current.next;
      current.next = removeNode.next;
      removeNode.next.prev = current;
      this.size--;
    } else {
      return `value not in list`;
    }
    return `value removed`;
  }
}

const dll = new LinkedList();
console.log(dll.getSize());
dll.prepend(10);
dll.prepend(20);
dll.prepend(30);
dll.prepend(40);
console.log(dll.getSize());
dll.display();
//dll.reverse();
console.log(dll.remove(20));
dll.display();
