const os = require('os')
const user = os.userInfo()
console.log(user)

//console.log( `this system's uptime ${os.uptime()} seconds`)

const currentos = {
    name:os.type(),
    release: os.release(),
    totalmem: os.totalmem()
}

console.log(currentos)