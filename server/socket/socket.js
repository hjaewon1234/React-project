import { Server } from "socket.io";

export default function (server) {
  const io = new Server(server, {
    cors: {
      origin: "http://locahost:3000",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    socket.join("");
    socket.on("JOIN_ROOM", (data) => {
      io.emit("enter", data);
    });

    socket.on("message", (data) => {
      console.log("client가 보낸 데이터 : ", data);
      io.emit("upload", data);
    });

    socket.on("leaveUser", (nick) => {
      io.emit("out", nick);
    });
  });
}
