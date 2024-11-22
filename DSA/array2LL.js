let array = [1, 2, 3, 4, 5];

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function array2LinkedList(array) {
  if (array.length == 0) {
    return `empty array`;
  }

  const node = new Node(array[0]);
  let current = node;
  for (let i = 1; i < array.length; i++) {
    current.next = new Node(array[i]);
    current = current.next;
  }
  return node;
}

function printLinkedList(array2LL) {
  let current = array2LL;
  while (current != null) {
    console.log(current.value);
    current = current.next;
  }
}

const array2LL = array2LinkedList(array);
printLinkedList(array2LL);
