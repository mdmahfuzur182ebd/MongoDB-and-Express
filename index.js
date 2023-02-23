console.log("RESTful API");

const http = require('http');

const server = http.createServer((request, respond)=>{
   if(request.url == "/"){
    respond.write("Hello someOne");
    respond.end();
   }
})

server.listen(3000);
console.log("Loading 3000 Port........");
