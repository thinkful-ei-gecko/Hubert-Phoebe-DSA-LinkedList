const LinkedList = require('./linkedList')

function main() {
  let SLL = new LinkedList();

  SLL.insertFirst('Apollo')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')
  SLL.insertLast('Tauhida')

  SLL.remove('squirrel')
  SLL.insertBefore('Athena', 'Boomer')
  SLL.insertAfter('Hotdog', 'Helo')
  SLL.insertAt('Kat', 4)
  SLL.insertAt('Kat', 3)
  SLL.remove('Tauhida')


  // console.log(JSON.stringify(SLL))
  //displayAsLl(SLL);
  //size(SLL);
  //isEmpty(SLL);
  //findPrevious('Athena', SLL)
  //findLast(SLL);
  //reverse(SLL);
  //thirdFromTheEnd(SLL);
  //middleOfList(SLL)
  cycleList();
}
main()

//3. Supp Funcs
function displayAsLl (linkedL) {
  console.log(JSON.stringify(linkedL))
}

// Challenge: display as array
// function displayAsArr (lL) {
//   lLArr = [];
//   while()
//   console.log(JSON.stringify(lL))
// }

function size (linkedL) {
  let counter = 0;
  let currNode = linkedL.head;
  while (currNode !== null) {
    counter++;
    currNode = currNode.next
  }
  console.log(counter);
}

function isEmpty (linkedL) {
  if (linkedL.head === null) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function findPrevious (item, linkedL) {
  let currNode = linkedL.head;
  let prevNode = linkedL.head;

  while((currNode.value !== item) && (currNode.next!==null)) {
    prevNode = currNode;
    currNode = currNode.next;
  }
  if (currNode.next === null) {
    console.log('Item not found')
    return;
  }

  //if currNode === item, then return previous node 
  console.log(prevNode.value)
}

function findLast (linkedL) {
  if (linkedL.head === null) {
    return null
  }
  let currNode = linkedL.head;
  
  //if currNode.next === null then return currNode
  while(currNode.next !== null) {
    currNode = currNode.next
  }

  console.log(currNode.value);
}

// 4. Mystery Program - This program is a duplicate eliminator. It is O(n^2) because the nested loop indicates a polynomial relationship.

// 5. Reverse a list
function reverse(linkedL) {
  // A->B->C = C->B->A
  let currNode = linkedL.head;
  let prevNode = null;
  let nextNode;

  if (linkedL.head === null) {
    console.log('There is no item')
    return;
  }

  while(currNode !== null) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }

  this.head = prevNode;
  console.log(JSON.stringify(prevNode))
  return prevNode;
}

function thirdFromTheEnd(linkedL) {
  let currNode = linkedL.head;
  let prevNode = linkedL.head;

  while(currNode.next.next !== null) {
    prevNode = currNode;
    currNode = currNode.next;
  }

  return console.log(JSON.stringify(prevNode.value));
}

function middleOfList(linkedL) {
  let end = lst.head;
  let middle = lst.head;
  // two cases cover even and odd length
  while(end !== null && end.next !== null) {
    // advance one pointer 2 times faster than the other
    end = end.next.next;
    middle = middle.next;
  }
  // return the value of the node which was advanced at regular speed
  return middle.value;
};

function cycleList() {
  const list = new LinkedList();

  list.insertFirst('Computer')
  list.insertLast('Laptop');
  list.insertLast('Mouse');
  list.insertLast('Speakers');

  displayAsLl(list);
  cycle(list);
  displayAsLl(list);
  
  //return list;
}

cycleList()

function cycle(linkedL) {
  let currNode = linkedL.head
  
  while(currNode.next !== null) {
    currNode = currNode.next;
  }
  currNode.next = linkedL.head;
}

function testCycle(lst) {
  let current = lst.head;
  while (current !== null) {
    if (current.next === null) {
      return false;
    }
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
        return true;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}