/**
 * @method
 * @param {String} str
 */

function stringPermutations(str) {
    var strArr = str.split('')
    var returnArr = []
    var currentStr = []

    var recursion = function(e, arr) {
        currentStr.push(e)
        if (arr.length) {
            arr.shift()
            for (var i = 0; i < arr.length; i++) {
                return recursion(arr[i], arr)
            }
            //return recursion(arr[0], arr)
        }
        currentStr = currentStr.join('')
        returnArr.push(currentStr)
        currentStr = []
        return
    }

    strArr.map(e => {
        recursion(e, strArr)
    })

    // for (var i = 0; i < strArr.length; i++) {
    //     recursion(strArr[i], strArr)
    // }
    return returnArr
}

stringPermutations('abc')

function stringPermutations(str) {
    var strArr = str.split('')
    var words = []
    var returnArr = []

    var recursion = function(letter, arr) {
        words.push(letter)
        if (arr.length - 1) {
            var newArr = arr.shift()
            for (var i = 0; i < newArr.length; i++) {
                return recursion(newArr[i], newArr)
            }
        }
        var currentWords = words.join('')
        returnArr.push(currentWords)
        words = []
        return
    }

    for (var i = 0; i < strArr.length; i++) {
        recursion(strArr[i], strArr)
    }

    return returnArr
}

function stringPermutations(str) {
    var strArr = str.split('')
    var startIndex = 0
    var moveIndex = 0
    var tempArr = []
    var returnArr = []

    tempArr = strArr

    var recursion = function() {
        moveIndex = moveIndex + startIndex
        var temp = tempArr[moveIndex]
        tempArr[moveIndex] = tempArr[moveIndex + 1]
        tempArr[moveIndex + 1] = temp 
        //[tempArr[moveIndex], tempArr[moveIndex + 1]] = [tempArr[moveIndex + 1], tempArr[moveIndex]]
        var a = tempArr.join('')
        returnArr.push(a)
        //moveIndex++
        if (moveIndex + 1 !== strArr.length) {
            moveIndex++
            return recursion()
        }
        if (startIndex + 1 !== strArr.length) {
            moveIndex = 0
            startIndex++
            return recursion()
        }
        return
    }
    return returnArr
    // 1 2 3 4
    // 2 1 3 4
    // 2 3 1 4
    // 2 3 4 1
}