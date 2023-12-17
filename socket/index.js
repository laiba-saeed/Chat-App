const { Server } = require("socket.io");

const io = new Server({ cors: "http://127.0.0.1:5173/" });

let onlineUsers = [];

io.on("connection", (socket) => {
  console.log("Connection established.", socket.id);

  //Listen to a connection event
  socket.on("addNewUser", (userId) => {
    !onlineUsers.some((user) => user.userId === userId) &&
      onlineUsers.push({
        userId,
        socketId: socket.id,
      });
    console.log("onlineUser", onlineUsers);

    io.emit("getOnlineUsers", onlineUsers);
  });

  //Listen to send message event => Add message
  socket.on("sendMessage", (message) => {
    //check if the recipient user is online
    const user = onlineUsers?.find(
      (user) => user.userId === message.recipientId
    );

    if (user) {
      // send a message to individual socket(receiver)
      io.to(user.socketId).emit("getMessage", message);
    }
  });

  //Listen to disconnect event
  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);

    io.emit("getOnlineUsers", onlineUsers);
  });
});

io.listen(3000);
