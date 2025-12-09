
const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    if(req.url==="/"){
        res.end("wl to node js");
    }
        else if(req.url==="/about"){
        res.end("wl to about us page");
    }else{
        res.statusCode=404;
        res.end("page not found");

    
    }
});
server.listen(5000, () => {
    console.log("server is listening on port 5000");
});