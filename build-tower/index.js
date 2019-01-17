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
  const getInitFloor = () => Array(nFloors * 2 - 1).fill(' ')
  return Array(nFloors).fill('').map((_, index) => {
    return getInitFloor().fill('*', nFloors - (index + 1), nFloors - (index + 1) + (2 * (index + 1) - 1)).join('')
  })
}

console.log(towerBuilder(6))
