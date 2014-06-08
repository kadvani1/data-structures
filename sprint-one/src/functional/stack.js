var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;
  // Implement the methods below
  instance.push = function(value){
    // push the value to storage
    storage[size] = value;
    // increase size by one
    size++;
  };

  instance.pop = function(){
    // empty check

    if ( size > 0 ) {
      // pop out the last item == size
      size--;
      var poppedValue = storage[size];
      delete storage[size];
    }
    return poppedValue;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
