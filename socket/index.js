const { Server } = require("socket.io");

const io = new Server({ cors: "http://127.0.0.1:5173/" });

let onlineUsers = [];

io.on("connection", (socket) => {
  console.log("Connection established.", socket.id);

  //Listen to a connection
  socket.on("addNewUser", (userId) => {
    !onlineUsers.some((user) => user.userId === userId) &&
      onlineUsers.push({
        userId,
        socketId: socket.id,
      });
    console.log("onlineUser", onlineUsers);

    io.emit("getOnlineUsers", onlineUsers);
  });
});

io.listen(3000);
