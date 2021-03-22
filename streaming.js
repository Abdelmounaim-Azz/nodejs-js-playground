const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  // fs.readFile("test.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  // const readable = fs.createReadStream("test.txt");
  // readable.on("data", chunk => {
  //   res.write(chunk);
  // });//readWrite of streams:backPressure problem
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", err => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("Something went wrong!");
  // });

  const readable = fs.createReadStream("test.txt");
  readable.pipe(res);
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Listening for reqs...");
});
