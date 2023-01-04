const path = require('path')

console.log(path.sep)
const pathfinder = path.join('\content', 'subfolder',  'test.txt')
console.log(pathfinder)

//const base = path.basename(filepath)
//console.log(base)

 const absolute = path.resolve(__dirname, 'content', 'subfoldr', 'test.txt')
 console.log(absolute) 