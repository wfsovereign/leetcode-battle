/*
* We want to create a function that will add numbers together when called in succession.

add(1)(2);
// returns 3
We also want to be able to continue to add numbers to our chain.

add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10
add(1)(2)(3)(4)(5); // 15
and so on.

A single call should return the number passed in.

add(1); // 1
We should be able to store the returned values and reuse them.

var addTwo = add(2);
addTwo; // 2
addTwo + 5; // 7
addTwo(3); // 5
addTwo(3)(5); // 10
We can assume any number being passed in will be valid whole number.
* */

function add (n) {
  let sum = n

  function inner (b) {
    sum += b
    return inner
  }

  inner.valueOf = () => sum
  return inner
}

function add1 (n) {
  const fn = (b) => add1(n + b)
  fn.valueOf = () => n
  return fn
}

/*
*
* Function is Object also, and Object.prototype.valueOf, the valueOf() method returns the primitive value of the specified object.
* JavaScript calls the valueOf method to convert an object to a primitive value. You rarely need to invoke the valueOf method yourself;
 * JavaScript automatically invokes it when encountering an object where a primitive value is expected.
 *
 * The short version is: if an object is being coerced into a primitive value (boolean, number, string),
  * and contains a method called valueOf, that method is called and the result is used in place of the object.
 *
 * So we can use valueOf to complete curring, that use valueOf store current value and return function reference.
* */
