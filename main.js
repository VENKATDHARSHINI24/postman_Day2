const fs=require('fs');
// const content="hi this is hello world";
// fs.writeFile("hello.txt",content,"UTF-8",(err)=>
//     {
//         if(err)
//         {
//             console.log(err);
//             return;
//         }
//         console.log("added successfully");
//     })
//      fs.appendFile("hello.txt"," new text updates ",(err)=>
//      {
//          if(err)
//          {
//          console.log("error: ",err);
//            return;
//        }
//         console.log("data updates");
//  })
// fs.rename("hello.txt","new.txt",(err)=>
//     {
//         if(err){
//     console.log(err)
//     return;
//     }
//     console.log("renamed successfully");

// })
// fs.unlink("new.txt",(err)=>
// {
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log("deleted successfully");
// })

// const path = require("path");

// const filepath = "/Users/Varshini/Downloads/project/day 2/";

// console.log("base name:", path.basename(filepath));
// console.log("dir name:", path.dirname(filepath));
// console.log("ext name:", path.extname(filepath));
// const joinedpath = path.join(__dirname, "public","index.html");
// console.log("joined path:", joinedpath);

// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     if(req.url==="/"){
//         res.end("wl to node js");
//     }
//         else if(req.url==="/about"){
//         res.end("wl to about us page");
//     }else{
//         res.statusCode=404;
//         res.end("page not found");

    
//     }
// });
// server.listen(5000, () => {
//     console.log("server is listening on port 5000");
// });
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//     {
//         res.send("Welcome to Node.js with Express!");
//     }
    
// });
//     app.listen(3000, () => {
//         console.log("Server is running on port 3000");
// });







const express = require("express");
const app = express();
//use json.. whenever middleware is used along with that json is used(Middleware to read json body)
app.use(express.json());
const userRouter = require("./routes/userRoutes");
app.use("/users", userRouter);
app.listen(3000,() => {
    console.log("Server connected successfully");
});


