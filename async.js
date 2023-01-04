const {readFile, writeFileSync} = require('fs');

readFile('.\content\first.txt', 'utf8', (err, res)=> {
    if (err) {
        console.log(`${err}`)
        return
    }
   const first = res;
})
   readFile('.\content\secondfile,txt', 'utf8', )
   if (err) {
    console.log(`${err}`)
    return
}
const second = res;

writeFileSync('.\content\nodeasynced.txt', 'utf8',
`here is the result : ${first}, ${second}`,
(err, res)=> {
    if (err) {
        console.log(`${err}`)
        return
    }
    console.log(res)
}
)
