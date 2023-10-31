import { createContext } from "react";
import socketIo from "socket.io-client";

export const socket = socketIo("http://wn01011.errorcode.help", {
  withCredentials: true,
});
export const SocketContext = createContext(6);

socket.on("connect", () => {});

socket.on("disconnect", () => {});

export const SOCKET_EVENT = {
  JOIN_ROOM: "JOIN_ROOM",
  UPDATE_NICKNAME: "UPDATE_NICKNAME",
  SEND_MESSAGE: "SEND_MESSAGE",
  RECEIVE_MESSAGE: "RECEIVE_MESSAGE",
};
