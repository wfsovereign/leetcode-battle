/*
* Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ',
  ' *** ',
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
* */

function towerBuilder (nFloors) {
  const w = nFloors * 2 - 1
  const getInitFloor = () => Array(w).fill(' ')
  const result = []
  let index = 1
  while (index <= nFloors) {
    let count = 2 * index - 1
    let startIndex = nFloors - index
    let floor = getInitFloor()
    while (count > 0) {
      floor[startIndex] = '*'
      startIndex++
      count--
    }
    result.push(floor)
    index++
  }
  return result.map(item => item.join(''))
}

console.log(towerBuilder(6))
