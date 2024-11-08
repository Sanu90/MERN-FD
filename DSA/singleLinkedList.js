class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
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
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  display() {
    if (this.isEmpty()) {
      console.log("empty list");
    } else {
      let curr = this.head;
      let values = "";
      while (curr) {
        values += `${curr.value}, `;
        curr = curr.next;
      }
      console.log("list is-->", values);
    }
  }
}

const list = new linkedList();
list.prepend(10);
list.append(20);
list.append(30);
list.prepend(40);
console.log(list.isEmpty(), list.getSize());
list.display();
