const fs = require("fs") //import dependencey: import fs from fs

const dir = "my-files"
fs.mkdirSync(dir)

for (let i=1 ; i <=100; i++){
    //this creating a file at 'my-files/20.txt', for example
    fs.writeFileSync(`${dir}/${i}.txt`, 'Hello from ${i}')
}