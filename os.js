const os = require("os");
console.log("platform: ", os.platform());
console.log("type:",os.type());
console.log("Total memory: ", os.totalmem());
console.log("Free memory: ", os.freemem());
console.log("Home dir: ", os.homedir());
console.log("cpu info: ", os.cpus());