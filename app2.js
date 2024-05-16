const http = require('http');
const fs = require('fs');
const path = require('path');

// Log the __dirname and __filename for debugging purposes
console.log(__dirname);
console.log(__filename);

// Get the contents of the HTML, CSS, JS, and Logo files
const homePage = fs.readFileSync(path.join(__dirname, 'navbar-app', 'index.html'), 'utf8');
const homeStyles = fs.readFileSync(path.join(__dirname, 'navbar-app', 'styles.css'), 'utf8');
const homeLogo = fs.readFileSync(path.join(__dirname, 'navbar-app', 'logo.svg'));
const homeLogic = fs.readFileSync(path.join(__dirname, 'navbar-app', 'browser-app.js'), 'utf8');

// Creating the Server
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(homePage);
        res.end();
    } else if (url === '/style.css') {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(homeStyles);
        res.end();
    } else if (url === '/logo.svg') {
        res.writeHead(200, {'Content-Type': 'image/svg+xml'});
        res.write(homeLogo);
        res.end();
    } else if (url === '/browser-app.js') {
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        res.write(homeLogic);
        res.end();
    } else if (url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404, Resource Not Found</h1>');
        res.end();
    }
});

server.listen(5000, () => {
    console.log('Server listening at port 5000');
});

