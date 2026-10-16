
function cityStateAddress(City, state) {
    let address = `${City}, ${state.toUpperCase()}`
    return address
}

console.log(cityStateAddress('Minneapolis', 'MN'))
let address = cityStateAddress('Seattle', 'WA')
console.log(address)

function isMinnesotaZip(code) {
    if (code >= 55001 && code <= 56763) {
        return true
    } else {
        return false
    }
}

function validGPA(gpa) {
    return gpa >= 0 && gpa <= 4
}

console.log(isMinnesotaZip(55403))
console.log(isMinnesotaZip(55001))
console.log(isMinnesotaZip(56763))
console.log(isMinnesotaZip(9686876789))
console.log(isMinnesotaZip(-1))
