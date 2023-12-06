const fs = require("fs").promises;

async function deleteUser(selectedUsers) {
  try {
    const usersData = await fs.readdir(
      `/Users/dipvai/Desktop/node_project/user`
    );
    console.log(usersData);
    selectedUsers.forEach(async (user) => {
      if (usersData.includes(user + ".json")) {
        await fs.unlink(
          `/Users/dipvai/Desktop/node_project/user` + "/" + user + ".json"
        );
      }
    });
  } catch (e) {
    console.log(e.message + ": " + "no user selected");
  }
}

module.exports = deleteUser;
