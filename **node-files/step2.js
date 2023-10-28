const fs = require('fs');
const process = require('process');
const axios = require('axios');

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

/** read page at URL and print it out. */

async function webCat(url) {
  try {
    let resp = await axios.get(url);
    console.log(resp.data);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}




