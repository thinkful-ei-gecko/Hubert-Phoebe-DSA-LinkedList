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
  displayAsLl(SLL);
  size(SLL);
  isEmpty(SLL);
  findPrevious('Athena', SLL)
  findLast(SLL);
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

