var Stack = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    this._size = 0;
    this._storage = {};
};

Stack.prototype = {};
Stack.prototype.push = function(val) {
    this._storage[this._size] = val;
    this._size++;
};
Stack.prototype.pop = function() {
    if (this._size > 0) {
        this._size--;
        var poppedValue = this._storage[this._size];
        delete this._storage[this._size];
        return poppedValue;
    }
};
Stack.prototype.size = function() {
    return this._size;
};
