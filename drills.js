const LinkedList = require('./linkedList')

function main() {
  let SLL = new LinkedList();

  SLL.insertFirst('Apollo')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')
  SLL.insertLast('Tauhida')

  SLL.insertBefore('Athena', 'Boomer')

  SLL.remove('squirrel')

  console.log(JSON.stringify(SLL))
}
main()
