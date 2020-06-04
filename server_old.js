const http = require("http")

const server = http.createServer((req,res) => {
    //status code 200 means "success"
    res.statusCode = 200

    //tell the browser what we sending back
    res.setHeader("Content-Type", "text/html")

    //send back some content
    res.write("<h1> Hello World<h1>")

    //send response back to the browser
    res.end()
})


//web servers beed to be continous listebubg for incoming requests
server.listen(8080,() => {
    console.log("server started on port 8080")
})

