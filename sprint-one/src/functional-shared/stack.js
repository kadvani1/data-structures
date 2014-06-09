var makeStack = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var instance = {};
    instance._storage = {};
    instance._size = 0;
    _.extend(instance, stackMethods);
    return instance;
};

// have all action methods in a function
// what's the benefit of it? - not sure


var stackMethods = {};
stackMethods.push = function(value) {
    this._storage[this._size] = value;
    this._size++;
};
stackMethods.pop = function() {
    if (this._size > 0) {
        this._size--;
        var result = this._storage[this._size];
        this._size;
    }
    return result
};
stackMethods.size = function() {
    return this._size;
};