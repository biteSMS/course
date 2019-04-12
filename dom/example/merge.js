/**
 * @method
 * @param {Object} obj1
 * @param {Object} obj2
 * @returns {Object}
 */

function merge(obj1, obj2) {
    var obj3 = {}
    var obj1Keys = Object.keys(obj1)
    var obj2Keys = Object.keys(obj2)

    obj1Keys.map(function (e) {
        obj3[e] = obj1[e]
    })

    obj2Keys.map(function (e) {
        obj3[e] 
        ? obj3[e] = [].concat(obj3[e], obj2[e])
        : obj3[e] = obj2[e]
    })

    return obj3
}

var obj1 = {
    a: [{
        x: 2
    }, {
        y: 4
    }],
    b: 1,
    c: 'bar'
}
var obj2 = {
    a: {
        z: 3
    },
    b: [2, 3],
    c: 'foo',
    d: 6
}

console.log(merge(obj1, obj2))