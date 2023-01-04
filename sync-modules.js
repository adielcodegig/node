const {readFileSync, writeFileSync} = require('fs');


const first = readFileSync('.\contentfirst.txt', 'utf8')
const second = readFileSync('\contentsecond.txt', 'utf8')

console.log(first)
console.log(second)

writeFileSync('\contentresult-sync.txt', 
 `here is the result : ${first}, ${second}`)
