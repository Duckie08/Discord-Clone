const authSocket = require("./middleware/authSocket");
const newConnectionHandler = require("./socketHandlers/newConnectionHandlers");
const disconnectHandler = require("./socketHandlers/disconnectHandler");

const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  console.log("44444");
  io.use((socket, next) => {
    authSocket(socket, next);
  });
  console.log("55555");

  io.on("connection", (socket) => {
    console.log(`user connected ${socket.id}`);
    newConnectionHandler(socket, io);

    socket.on("disconnect", () => {
      disconnectHandler(socket);
    });
  });
};

module.exports = {
  registerSocketServer,
};
