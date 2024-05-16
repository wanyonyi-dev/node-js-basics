const http = require('http');
const server = http.createServer((req,res) =>{
if(req.url === '/'){
res.writeHead(200,{'content-type': 'text/html'});
res.write('<h1>Home page</h1>');
res.end();
}else if(req.url === '/about'){
res.writeHead(200,{'content-type':'text/html'});
res.write('<h1>About page</h1>');
res.end();
}else if(req.url === '/contact'){
res.writeHead(200,{'content-type': 'text/html'});
res.write('<h1>Contact page</h1>');
res.end();
} else {
res.writeHead(404,{'content-type': 'text/html'});
res.write('<h1>404,Resouce Not Found <a href="/">Go Back Home</a></h1>');
res.end();
}
})
server.listen(5000,() => {
console.log('server Listeing at port 5000');
})
