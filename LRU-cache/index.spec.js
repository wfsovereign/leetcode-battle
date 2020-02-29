const { expect } = require('chai')
const {LRUCache} = require('./index')


describe('LRUCache tools', function () {

  it('should has 2 capacity value when init with 2', function () {
    const cache = new LRUCache(2)
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).to.equal(1)
    cache.put(3, 3);    // evicts key 2
    expect(cache.get(2)).to.equal(-1)
    expect(cache.get(1)).to.equal(1)
  })

  it('should call get will elevate order in stack', function () {
    const cache = new LRUCache(2)
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).to.equal(1)
    cache.put(3, 3);    // evicts key 2
    expect(cache.get(2)).to.equal(-1)
    expect(cache.get(1)).to.equal(1)
  })

  it('should update value when put the already key', function () {
    const cache = new LRUCache(2)
    cache.put(1, 1);
    expect(cache.get(1)).to.equal(1)
    cache.put(1, 2);
    expect(cache.get(1)).to.equal(2)
  })

})
