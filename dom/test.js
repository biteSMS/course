function dig(obj, target) {
    for (var key in obj) {
        if (key === target) {
            return obj[key]
        }
    }

    var objArr = []
    for (var key in obj) {
        if (obj[key] instanceof Object) {
            objArr.push(obj[key])
        }
    }

    for (var i = 0; i < objArr.length; i++) {
        return dig(objArr[i], target)
    }
}