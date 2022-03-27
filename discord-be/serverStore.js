const connectedUsers = new Map();

const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUsers.set(socketId, { userId });
  console.log("new conneccted user");
  console.log(connectedUsers);
};

const removerConnectedUser = (socketId) => {
  if (connectedUsers.has(socketId)) {
    connectedUsers.delete(socketId);
    console.log("new connected user");
    console.log(connectedUsers);
  }
};
module.exports = {
  addNewConnectedUser,
  removerConnectedUser,
};
