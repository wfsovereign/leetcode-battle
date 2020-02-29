/*
* https://leetcode.com/problems/lru-cache/
*
* Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 /* capacity *\/ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*
* */

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.keyStack = []
  this.cache = {}
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const target = this.cache[key]
  if (target === undefined) {
    return -1
  }
  this.updateKeyIndexOfStack(key)
  return target
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache[key] !== undefined) {
    this.updateKeyIndexOfStack(key)
    this.cache[key] = value
    return
  }

  if (this.keyStack.length < this.capacity) {
    this.cache[key] = value
    this.updateKeyIndexOfStack(key)
    return
  }

  const lastKey = this.getLastKeyOfKeyStack()
  this.removeKeyOfStack(lastKey)
  this.addKeyOfStack(key)
  delete this.cache[lastKey]
  this.cache[key] = value
};

LRUCache.prototype.getLastKeyOfKeyStack = function() {
  return this.keyStack[this.keyStack.length -1]
}

LRUCache.prototype.addKeyOfStack = function(key) {
  this.keyStack.unshift(key)
}

LRUCache.prototype.removeKeyOfStack = function(key) {
  this.keyStack = this.keyStack.filter(item => item !== key)
}

LRUCache.prototype.updateKeyIndexOfStack = function(key) {
  this.removeKeyOfStack(key)
  this.addKeyOfStack(key)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/*
* Runtime: 576 ms, faster than 5.02% of JavaScript online submissions for LRU Cache.
Memory Usage: 77.2 MB, less than 10.00% of JavaScript online submissions for LRU Cache.
* */


module.exports = {
  LRUCache
}
