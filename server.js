const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const { url } = req;
    let filePath;
    if (url === '/' || url.toLowerCase() === '/home') {
        filePath = path.join(__dirname, 'pages', 'home.html');
    } else if (url.toLowerCase() === '/about') {
        filePath = path.join(__dirname, 'pages', 'about.html');
    } else if (url.toLowerCase() === '/contact') {
        filePath = path.join(__dirname, 'pages', 'contact.html');
    } else {
        filePath = path.join(__dirname, 'pages', '404.html');
    }
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("500 -Internal server error");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
