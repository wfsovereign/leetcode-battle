/*
code wars
* Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*
* */

function iqTest(numbers) {
    var array = numbers.split(" ")
    var length = array.length
    var isEven = false
    var oddNumberCount = 0
    var evenNumberCount = 0
    for (var i = 0; i < length; i++) {
        if (array[i] % 2 === 1) {
            oddNumberCount++
        } else if (array[i] % 2 === 0) (
            evenNumberCount++
        )
        if (oddNumberCount >= 2 || evenNumberCount >= 2) {
            break
        }
    }
    if (evenNumberCount >= 2) {
        isEven = true
    }

    return array.findIndex(item => {
        if (isEven) {
            return item % 2 === 1
        }
        return item % 2 === 0
    }) + 1
}

// other clever method
function iqTest(numbers){
    var nums = numbers.split(" ").map(x => x % 2);
    var sum = nums.reduce((a,b) => a + b);
    var target = sum > 1 ? 0 : 1;

    return nums.indexOf(target) + 1;
}

// this method make me learned x & 1 for judge is the number odd.
/*
Because the number 1 bits are 00000001, when number & 1, will keep the number last bit is previous, and others bit change to 0.
So if the number is odd, the last bit will be 1, the number & 1 result will be 1. Otherwise, the last bit will be 0, the result will be 0.
* */
function iqTest(numbers){
    numbers = numbers.split(' ')

    var evens = []
    var odds = []

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] & 1) {
            odds.push(i + 1)
        } else {
            evens.push(i + 1)
        }
    }

    return evens.length === 1 ? evens[0] : odds[0]
}

var testData = "2 4 7 8 10"
console.log(iqTest(testData))

