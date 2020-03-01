const { expect } = require('chai')
const { LRUCache } = require('./index')

const { LRUCache2 } = require('./index2')

describe('LRUCache tools', function () {

  it('should has 2 capacity value when init with 2', function () {
    const cache = new LRUCache(2)

    cache.put(1, 1)
    cache.put(2, 2)
    expect(cache.get(1)).to.equal(1)
    cache.put(3, 3)    // evicts key 2
    expect(cache.get(2)).to.equal(-1)
    expect(cache.get(1)).to.equal(1)
  })

  it('should update value when put the already key', function () {
    const cache = new LRUCache(2)

    cache.put(1, 1)
    expect(cache.get(1)).to.equal(1)
    cache.put(1, 2)
    expect(cache.get(1)).to.equal(2)
  })

})

describe('LRU cache 2', function () {
  it('should has 2 capacity value when init with 2', function () {
    const cache2 = new LRUCache2(2)

    cache2.put(1, 3)
    cache2.put(2, 4)
    expect(cache2.get(1)).to.equal(3)
    cache2.put(3, 3)    // evicts key 2
    expect(cache2.get(2)).to.equal(-1)
    expect(cache2.get(1)).to.equal(3)
  })

  it('should output correct value when input value greater than capacity', function () {
    const cache = new LRUCache2(2)

    cache.put(2, 1)
    cache.put(1, 1)
    cache.put(2, 3)
    cache.put(4, 1)

    expect(cache.get(1)).to.equal(-1)
    expect(cache.get(2)).to.equal(3)
  })
})
