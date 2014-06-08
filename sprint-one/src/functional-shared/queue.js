var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  _.extend(instance, queueMethods);
  instance._storage ={};
  instance._size = 0;
  return instance;
};

var queueMethods = {};
queueMethods.enqueue = function(val) {
    this._storage[this._size] = val;
    this._size++;
};
queueMethods.dequeue = function() {
    if (this._size > 0) {
        this._size--;
    	var dequeuedValue = this._storage[0];
    	delete this._storage[0]
    	for ( var i = 0; i < this._size; i++ ) {
    		this._storage[i] = this._storage[i+1];
    	}
        return dequeuedValue;
    }
};
queueMethods.size = function() {
    return this._size;
};