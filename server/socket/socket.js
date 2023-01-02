import { Server } from "socket.io";

const worldsArr = ["whole", "world1", "world2", "world3"];

export default function (server) {
  const io = new Server(server, {
    cors: {
      origin: "http://wn01011.errorcode.help",
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    socket.on("ROOM", () => {
      worldsArr.map((item) => {
        socket.join(item);
      });
    });
    socket.on("JOIN_ROOM", (data) => {
      io.emit("enter", data);
    });

    socket.on("message", (data) => {
      io.to(data.room).emit("upload", data);
    });

    socket.on("leaveUser", (nick) => {
      io.emit("out", nick);
    });
    socket.on("disconnect", () => {});
  });
}
