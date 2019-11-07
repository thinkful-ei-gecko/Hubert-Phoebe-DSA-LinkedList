class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) { 
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if(this.head === null) {
      this.insertFirst(item)
    }

    let tempNode = this.head;
    while(tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item, null)
  }

  insertBefore(item, key) {
    let currNode = this.head;
    
    if(!this.head) {
      return null;
    }

    while((currNode.next !== null) && (currNode.value !== key)) {
      currNode = currNode.next
    }

    if(currNode.next === null) {
      console.log('Item not found')
      return;
    } 

    let newNode = new _Node(item, currNode.next)
    currNode = newNode

    //currNode.next = key;
  }

  remove(item) {
    // If the list is empty
    if(!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // start at the head
    let currNode = this.head;
    // keep track of the previous node
    let previousNode = this.head

    while((currNode !== null) && (currNode.value !== item)) {
      //save the previous node
      previousNode = currNode
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found')
      return;
    }
    previousNode.next = currNode.next;
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if(!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /*Return null if its the end of the list
      and the item is not on the list*/
      if (currNode.next === null) {
        return null;
      }
      else {
        //Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    return currNode;
  }
};

module.exports = LinkedList;