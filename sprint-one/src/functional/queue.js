var makeQueue = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var someInstance = {};
    var storage = {};
    var size = 0;
    someInstance.enqueue = function(val) {
        storage[size] = val;
        size++;
    };
    someInstance.dequeue = function() {
        if (size > 0) {
            size--;
            var dequeuedValue = storage[0];
            delete storage[0]
            for (var i = 0; i < size; i++) {
                storage[i] = storage[i + 1];
            }
            return dequeuedValue;
        }
    };
    someInstance.size = function() {
        return size;
    };
    return someInstance;

};