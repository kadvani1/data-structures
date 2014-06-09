var HashTable = function(){
  this._limit = 8;
  this._usedSlots = 0;
  this._storage = makeLimitedArray();
};

HashTable.prototype.resize = function(limit, usedSlots, context){
 var usedSpace = (usedSlots / limit);
 if ( usedSpace >= .75 ) {
   context._limit = limit * 2;
 }
 if ( usedSpace <= .25 ){
   context._limit = limit / 2;
 }
}

HashTable.prototype.insert = function(k, v){
  // hashing function
  if ( this._usedSlots > 0 ){
    this.resize(this._limit, this._usedSlots, this);
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  // setting a value into a storage
  var bucket = this._storage.get(i) || [];
  // check if there is a value already at the index i
  bucket.push(k, v);
  this._storage.set(i, bucket);
  this._usedSlots++
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  var whereIsPair = bucket.indexOf(k);
  if ( whereIsPair >= 0) {
    var pair = bucket.splice(whereIsPair, 2);
    return pair[1];
  }else{
    return null;
  }
};

HashTable.prototype.remove = function(k){
  if ( this._usedSlots > 0 ){
  this.resize(this._limit, this._usedSlots, this);
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  var whereIsPair = bucket.indexOf(k);
  bucket.splice(whereIsPair, 2);
  var newBucket = bucket || null;
  this._storage.set(i, newBucket);
  this._usedSlots--;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
