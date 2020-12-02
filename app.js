var userInputArray = []
var display = '';
var total = 0;
var userTracker = 0;

const times = ' * '
const minus = ' - '
const plus = ' + '
const divide = ' / '
const percent = ' % '
const dot = '.'
const equals = document.getElementById('equals')



function calculatorLogic(input) {

    if (userTracker >= 2) {
        display = eval(userInputArray[0] + userInputArray[1] + userInputArray[2])
        userInputArray = [display.toString()]
        userTracker = 0
    }


    //Check for math operator, if the user is chaining - then calculate out when you have two sums, set return value as first index of array, then add operator again

    if (isNaN(input) == true && userTracker <= 1) {
        if (input == AC) {
            display = ''
            userInputArray = []
            userTracker = 0;
            total = 0;
        } else if (input == CE) {
            display = ''
        } else if (input == divide && display != '' && display != '.') {

            if (userTracker >= 1) {
                userInputArray[2] = display;
                display = eval(userInputArray[0] + userInputArray[1] + userInputArray[2])
                userInputArray = [display.toString()]
                userTracker = 0
            }

            userInputArray[0] = display;
            userTracker += 1;
            userInputArray[1] = divide;
            display = ''

        } else if (input == minus && display != '' && display != '.') {

            if (userTracker >= 1) {
                userInputArray[2] = display;
                display = eval(userInputArray[0] + userInputArray[1] + userInputArray[2])
                userInputArray = [display.toString()]
                userTracker = 0
            }

            userInputArray[0] = display;
            userTracker += 1;
            userInputArray[1] = minus;
            display = ''

        } else if (input == plus && display != '' && display != '.') {

            if (userTracker >= 1) {
                userInputArray[2] = display;
                display = eval(userInputArray[0] + userInputArray[1] + userInputArray[2])
                userInputArray = [display.toString()]
                userTracker = 0
            }

            userInputArray[0] = display;
            userTracker += 1;
            userInputArray[1] = plus;
            display = ''

        } else if (input == times && display != '' && display != '.') {

            if (userTracker >= 1) {
                userInputArray[2] = display;
                display = eval(userInputArray[0] + userInputArray[1] + userInputArray[2])
                userInputArray = [display.toString()]
                userTracker = 0
            }

            userInputArray[0] = display;
            userTracker += 1;
            userInputArray[1] = times;
            display = ''

        } else if (input == dot && display != '' && display != '.') {
            display = display + dot;
        } else if (input == percent && display != '' && display != '.') {

            if (userTracker >= 1) {
                userInputArray[2] = display;
                display = eval(userInputArray[0] + userInputArray[1] + userInputArray[2])
                userInputArray = [display.toString()]
                userTracker = 0
            }

            userInputArray[0] = display;
            userTracker += 1;
            userInputArray[1] = percent;
            display = ''

        } else if (input == equals && display != '' && display != '.') {
            userInputArray[2] = display;
            userTracker += 1;;
        }

    } else if (isNaN(input) == false) {

        display = display + input.toString();

    }

    if (userTracker >= 2) {
        display = eval(userInputArray[0] + userInputArray[1] + userInputArray[2])
        userInputArray = [display.toString()]
        userTracker = 0
    }


    document.getElementById('answer').placeholder = display
}

//use eval() on the stored array to convert the string to a mathematical operator
//E.G eval('225 + 5') returns 230, but ('225 + 5 * 2') equals 235, so on operator press - check if array is larger than [2] 
//[0] is the first whole number, [1] is the math operator, and
//[2] is the second number, as soon as this tries to store a fourth thing in the array - do the math, return the math and apply the new maths to the number this returns if the user tries to put more into the calculator