const fs = require("fs").promises;
const path = require("path");

const dir = "/Users/dipvai/Desktop/node_project/common/";
const fileName = "session.js";
const filePath = path.join(dir, fileName);

const createSession = async function () {
  try {
    // Ensure the directory exists before attempting to write the file
    await fs.mkdir(dir, { recursive: true });

    // Read existing content of the file
    let existingContent = "";
    try {
      existingContent = await fs.readFile(filePath, "utf-8");
    } catch (readError) {
      // File doesn't exist yet, that's okay
    }

    // Prepend the new line to the existing content
    const newContent = "var logged = true;\n" + existingContent;

    // Write the updated content back to the file
    await fs.writeFile(filePath, newContent);

    console.log("Session file created successfully.");
  } catch (e) {
    console.error("Error creating session file:", e.message);
  }
};

module.exports = createSession;
