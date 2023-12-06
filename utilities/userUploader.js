const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../");

let folderCreator = async function () {
  fs.access(dir, async (err) => {
    if (!err) {
      try {
        await fs.promises.mkdir(dir + "user", { recursive: true });
        console.log("folder created");
      } catch (err) {
        console.log(`folder creation failed because ${err.message}`);
      }
    } else {
      console.log("access denied");
    }
  });
};

let userFileGenerator = async function (userDetails) {
  fs.open(
    dir + `user/${userDetails.email}` + ".json",
    "w",
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        fs.writeFile(fileDescriptor, JSON.stringify(userDetails), (err) => {
          if (!err) {
            console.log("File written successfully");
            fs.close(fileDescriptor);
          } else {
            console.log(
              "File not written successfully because+ " + err.message
            );
          }
        });
      } else {
        console.log("File not written successfully because+ " + err.message);
      }
    }
  );
};

function userFileUploader(req, res, next) {
  const userDetails = req.body;
  folderCreator()
    .then(() => {
      return userFileGenerator(userDetails);
    }).then(() => {console.log("File uploaded successfully from final");})
    .catch((err) => {
      console.log(err.message);
    });
}

module.exports = userFileUploader;
