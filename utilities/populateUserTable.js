const fs = require("fs").promises; //used promises-based fs module

async function readUser() {
  const dir = "/Users/dipvai/Desktop/node_project/user";
  try {
    const fileList = await fs.readdir(dir);
    const userData = fileList.map(async (eachFile) => {
      const data = await fs.readFile(dir + "/" + eachFile, "utf8");
      return JSON.parse(data);
    });
    return Promise.all(userData);
  } catch (err) {
    throw err;
  }
}



module.exports = readUser;
