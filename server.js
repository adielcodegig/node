const http = require('http');

const server = http.createServer((req , res)=>{
    if (req.url === './' ) {
        res.end();
    }
     if ( req.url ==='/about') {
        res.write('mystery')
     }
    res.write( `<h1>hhhhh</h1>
        <a href='/'> back home</a>`)
    
})

server.listen(5009)