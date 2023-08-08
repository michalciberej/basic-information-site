const path = require("path")
const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "/index.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, {"content-type": "text/html"})
      res.write(data)
      res.end()
    }) 
  } else if (req.url === "/contactme") {
    fs.readFile(path.join(__dirname, "/contact-me.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, {"content-type": "text/html"})
      res.write(data)
      res.end()
    })
  } else if (req.url === "/about") {
    fs.readFile(path.join(__dirname, "/about.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, {"content-type": "text/html"})
      res.write(data)
      res.end()
    })
  } else {
    fs.readFile(path.join(__dirname, "/404.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(404, { "content-type": "text/html"})
      res.write(data)
      res.end()
    })
  }
})

server.listen(5000, () => {
  console.log("Server started...")
})