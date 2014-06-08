var makeBinarySearchTree = function(value){
  // instance factory
  // set the method obj as prototype using Object.create
  var treeInstance = Object.create(BinarySearchMethods);
  // comes with the default props of value, left, right
    // use the value arg and assign it to the value property
    // they come with the default value of undefined.
  treeInstance.value = value;
  treeInstance.left = undefined;
  treeInstance.right = undefined;
  // return the instance
  return treeInstance;
};

// write in prototypal
// create a tree stucture
// add comparison logic


// BinarySearchMethods
var BinarySearchMethods = {};

// insert
  // compare
  // traverse
  // populate left or right

BinarySearchMethods.insert = function(newValue){
  var traverseLeft = (this.value >= newValue ? true : false);
  var childExist = (this.left || this.right);
  var leftExist = !!this.left;
  var rightExist = !!this.right;
  // if no child exists, plant a new tree
  if ( !childExist ) {
     if ( traverseLeft ) {
       this.left = makeBinarySearchTree(newValue);
     }else{
       this.right = makeBinarySearchTree(newValue);
     }
     // once it plants a tree, no need to go further
     return 'inserted' + ' ' + newValue;
  }
  // if a child exists, traverse until there's none
  if ( traverseLeft ) {
  	  if ( leftExist ) {
  	  	var childLeft = this.left;
        childLeft.insert(newValue);
  	  }else{
  	   // a child exists only to the right, so we plant a new tree to the left
       this.left = makeBinarySearchTree(newValue);
  	  }
  }else{
  	  if ( rightExist ){
	  	var childRight = this.right;
  	    childRight.insert(newValue);
  	  }else{
  	   // a child exists only to the left, so we plant a new tree to the left
        this.right = makeBinarySearchTree(newValue);
  	  }
  }
}

// contains
BinarySearchMethods.contains = function(target){
  // check if the current node's value matches the target arg.
  var found = (this.value === target);
  var traverseLeft = (this.value >= target ? true : false);
  var childExist = (this.left || this.right);
  if ( found ){
  	return true;
  }
  if ( !childExist ){
  	return false;
  }
  if ( traverseLeft ){
    if ( this.left ) {
      var childLeft = this.left;
      if ( childLeft.contains(target) ) {
      	return true;
      };
    }
    return false;
  }else{
  	if ( this.right ){
  	  var childRight = this.right;
  	  if ( childRight.contains(target) ){
  	  	return true;
  	  }
  	  return false;
  	}
  }
  return false;
  // check if there's children
    // compare the current value to target
    // decide whether to traverse to left or right
      // repeat and return true, if the returned result is true
  // return false

  // use the compare logic to traverse faster
};

// depthfirst log
BinarySearchMethods.depthFirstLog = function(callback){
  // callback.apply(this.value, arguments)
  var childExist = (this.left || this.right);
  callback(this.value);
  if ( this.left ) {
    var childLeft = this.left;
    childLeft.depthFirstLog(callback);
  }
  if ( this.right ){
    var childRight = this.right;
    childRight.depthFirstLog(callback);
  }  
};






/*
 * Complexity: What is the time complexity of the above functions?
 */
