const fs = require("fs/promises");

async function readFile(path) {
  const file = await fs.readFile(path);

  return JSON.parse(file);
}

module.exports = { readFile };
