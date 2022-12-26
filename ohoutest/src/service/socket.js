import { createContext } from "react";
import socketIo from "socket.io-client";

export const socket = socketIo("http://localhost:3000", {
  withCredentials: true,
});
export const SocketContext = createContext(socket);

socket.on("connect", () => {
  console.log("socket server connected");
});

socket.on("disconnect", () => {
  console.log("socket server disconnected");
});

export const SOCKET_EVENT = {
  JOIN_ROOM: "JOIN_ROOM",
  UPDATE_NICKNAME: "UPDATE_NICKNAME",
  SEND_MESSAGE: "SEND_MESSAGE",
  RECEIVE_MESSAGE: "RECEIVE_MESSAGE",
};
