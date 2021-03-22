const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 4;

fs.readFile("test.txt", () => {
  console.log("I/O finished");
  console.log("----------------");

  process.nextTick(() => console.log("Process.nextTick"));

  crypto.pbkdf2Sync("pass1", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Pass1 encrypted");

  crypto.pbkdf2Sync("pass2", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Pass2 encrypted");

  crypto.pbkdf2Sync("pass3", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Pass3 encrypted");

  crypto.pbkdf2Sync("pass4", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Pass4 encrypted");
});

console.log("top-level code here");
