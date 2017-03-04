var fs = require("fs");
var os = require("os");
var readLine = require('readline');

var readstream = fs.createReadStream("sp500hst.txt");
var writestream = fs.createWriteStream("output.txt");

console.log("已读取流数据");
console.log("正在解析");

var read = readLine.createInterface({
    input: readstream
})

var index = 1;
//writestream.write("[")
read.on('line', (line)=>{
    writestream.write("["+line+"]"+os.EOL);
    index++;
});
read.on('close',()=>{
    console.log("解析完毕");
})