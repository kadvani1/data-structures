var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value){
    // should handle the first node created
    // probably do something with head conditionally
    // create a new node instance
    var newNode = makeNode(value);
    // initialize the head or add a reference from the old tail to the new tail
    list.head === null ? list.head = newNode : list.tail.next = newNode;
    // set up the new tail
    list.tail = newNode;
  };

  list.removeHead = function(){
    // store the value of the old head
    var headValue = list.head.value;
    // set up the new head
    list.head = list.head.next;
    // delete/disassociate the old head value somehow?
    return headValue;
  };

  list.contains = function(target){
    // start searching with the first node
    var node = list.head;
    
    var result = false;
    // while node.next is not null
    // check if node.value === target
    while (node !== null && result !== true){
      result = (node.value === target ? true : false);
      node = node.next;
    }
    return result;
  }

  // create an instance of a linked list
  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


