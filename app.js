var userInputArray = []
var display = 0;
var total = 0;

const times = ' x '
const minus = ' - '
const plus = ' + '
const divice = ' / '
const dot = '.'
const equals = 'equals'


function calculatorLogic(input) {
    if (isNaN(input) == true) {
        console.log(input)
    } else if (isNaN(input) == false) {
        console.log('Is a number ' + input)
    }
}