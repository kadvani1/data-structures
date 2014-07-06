var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = newTree.parent || null;
  newTree.children = undefined;
  _.extend(newTree, treeMethods)
  return newTree;
};

var treeMethods = {};

//this ==== node addChild is operated on
treeMethods.addChild = function(value){
  // create a child tree node
  var childTree = makeTree(value);
  // add the new child tree as children
  // console.log(this);
  if ( this.children === undefined ) {
    // intialize child array
    var childArray = [];
    childArray.push(childTree)
    this.children = childArray;
  }else{
    this.children.push(childTree);
  }
};

treeMethods.contains = function(target){
  // check if a node's value matches the target
  // the top node has it
  if ( this.value === target ) {
    return true;
  }
  // if !children, return false
  if ( this.children === undefined ) {
    return false;
  }
  // one of its children has it
  for (var i = 0; i < this.children.length; i++ ) {
    var child = this.children[i];
    // the line below is crucial for bottoming up.
    if ( child.contains(target) ) {
        return true;
    }
  }
  // if none, return false
  return false;
  // iterate on the children if there's children
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

