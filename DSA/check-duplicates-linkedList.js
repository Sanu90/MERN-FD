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
  isEmpty(){
    return this.size==0
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

  findDuplicates() {
    const duplicates = new Set();
    let current = this.head;
    while (current) {
      let checker = current.next;
      while (checker) {
        if (current.value === checker.value) {
          duplicates.add(checker.value);
        }
        checker = checker.next;
      }
      current = current.next;
    }
    return duplicates;
  }
}

const list = new linkedList();
list.append(1);
list.append(3);
list.append(1);
list.append(10);
list.append(0);
list.append(0);
console.log(list.findDuplicates())


