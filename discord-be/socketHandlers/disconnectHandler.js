const serverStore = require("../serverStore");

const disconnectHandler = (socket) => {
  serverStore.removerConnectedUser(socket.id);
};

module.exports = disconnectHandler;
