// single linked list

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
      console.log("Empty list");
    } else {
      let curr = this.head;
      let showData = "";
      let totalSum = 0;
      while (curr) {
        showData += `${curr.value} `;
        totalSum += curr.value;
        curr = curr.next;
      }
      console.log("Data is-->", showData);
      console.log("Sum of linkedlist-->", totalSum);
    }
  }

  delete(value) {
    if (this.isEmpty()) {
      console.log("List is empty already");
    }
    while(curr){
      
    }
  }
}

const list = new linkedList();

list.append(10);
list.append(20);
list.prepend(5);
list.display();
console.log(list.getSize());
