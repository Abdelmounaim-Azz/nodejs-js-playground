const EventEmitter = require("events");
const http = require("http");

class Inheretance extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Inheretance();

myEmitter.on("newEvent", () => {
  console.log("There was a new Event!");
});

myEmitter.on("newEvent", (args) => {
  console.log(`this is an arg from eventEmitter ${args}.`);
});

myEmitter.emit("newEvent", 12);

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  res.end("Request received");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(5000, "127.0.0.1", () => {
  console.log("server waiting for reqs...");
});
