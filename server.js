// import server 
// import http
let http = require("http");
const fs = require("fs");
const path = require("path");
// create server
const app = http.createServer((req, res) => {
    
    
})

// port name
const Port = 8081

// app listen
app.listen(Port, () => {
    console.log(`Node.js running at http://localhost:${Port}`);
})
