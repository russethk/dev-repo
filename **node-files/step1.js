const fs = require('fs');
const process = require('process');

// read file with given path and print contents

function cat(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      // handle possible error
      console.error(`Error reading ${path}: ${err}`);
      // kill the process and tell the shell it errored
      process.exit(1);
    } else {
      // otherwise success
      console.log(data);
    }
  });
}

cat(process.argv[2]);
