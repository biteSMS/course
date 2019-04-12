/**
 * @method
 * @param {Obejct} obj
 * @param {String} target
 * @returns {*}
 */

function dig(obj, target) {
    var keys = Object.keys(obj)
    if (keys.includes(target)) {
        return obj[target]
    } else {
        var values = Object.values(obj)
        var objList = values.filter(function (e) {
            return e instanceof Object
        })
        return (objList.map(function (e) {
            return dig(e, target)
        }))[0]
    }
}

var data = {
    level1: {
        level2: {
            level3: 'some data'
        }
    },
    level2: 'Hi'
}

console.log(dig(data, 'level3'))