const http = require('http');

const server = http.createServer((req,res)=> {
if(req.url ==='/'){
res.end('This is my Home Page');
}else if(req.url ==='/about'){
res.end('This is my About page');
}else if(req.url === '/contact'){
res.end('This is my contact page')
} else {
res.end('404,Resource Not Found')
}
})
 server.listen(5000,() => {
console.log('server listening at port 5000');
})

