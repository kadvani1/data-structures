var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create an instance using Object.create(prototypeName);
  var instance = Object.create(stackMethods);
  
  // variables tied to instance as props
  instance._size = 0;
  instance._storage = {};
  
  // return the instance
  return instance;

};

var stackMethods = {};

stackMethods.push = function(val){
	this._storage[this._size] = val;
	this._size++;
};
stackMethods.pop = function(){
	if ( this._size > 0 ) {
		this._size--;
		var poppedValue = this._storage[this._size];
		delete this._storage[this._size];
		return poppedValue;
	}
};
stackMethods.size = function(){
	return this._size;
};

