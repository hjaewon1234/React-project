import { Server } from "socket.io";

const worldsArr = ["whole", "world1", "world2", "world3"];

export default function (server) {
  const io = new Server(server, {
    cors: {
      origin: "http://locahost:3000",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    socket.on("ROOM", (data) => {
      worldsArr.map((item) => {
        if (socket.rooms.has(item) && data != item) {
          socket.leave(item);
        }
      });

      socket.join(data, () => {
        console.log(data, "방입장");
      });
    });
    socket.on("JOIN_ROOM", (data) => {
      console.log(data);
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
