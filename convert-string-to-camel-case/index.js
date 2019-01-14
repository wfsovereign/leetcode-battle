/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 The first word within the output should be capitalized only if the original word was capitalized.

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
* */
function toCamelCase(str) {
    var dashWords = str.split('-')
    var underscoreWords = str.split('_')
    var targetWords

    if (dashWords.length > 1) {
        targetWords = dashWords
    } else {
        targetWords = underscoreWords
    }

    return targetWords.map((item, index) => {
        if (index === 0) {
            return item
        }
        return toCamelCaseOneWord(item)
    }).join('')

    function toCamelCaseOneWord(word) {
        var firstChar = word.slice(0, 1)
        var restChar = word.slice(1, word.length)
        return firstChar.toUpperCase() + restChar
    }
}

var test = 'the_stealth_warrior'

console.log(toCamelCase(test))
