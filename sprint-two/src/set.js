var makeSet = function(){
  var set = Object.create(setPrototype);
  // public properties
  // array is the best as it's simpler to handle than non-integer-key'ed objects
  set._storage = [];
  set._size = 0;

  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  // check if there's a duplicate - using contains
  if ( !this.contains(item) ){
    // if not, add the item to storage
    this._storage.push(item);
    // and increment the size by 1
    this._size++;
  }
};

setPrototype.contains = function(item){
  // return true if there is such an element
  // iterate and do a truth test
  var result = false;
  for (var i = 0; i < this._storage.length; i++){
  	if (this._storage[i] === item){
  		result = true;
  	}
  }
  return result;
};

setPrototype.remove = function(item){
  // check if it exists
  // wanna refactor below
  if ( this.contains(item) ) {
  	for (var i = 0; i < this._storage.length; i++){
  	  if (this._storage[i] === item){
        this._storage.splice(i,1);
  	  }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
