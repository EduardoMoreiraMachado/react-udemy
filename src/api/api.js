import axios from "axios";
import { io } from "socket.io-client";
import { notify } from "../utils/notify";

// API'S
export const cepAPI = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export const commonsAPI = axios.create({
  baseURL: "http://localhost:8080/commons",
});

export const marketerAPI = axios.create({
  baseURL: "http://localhost:8080/fair",
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem("user-logged-token")}`,
    },
  },
});

export const costumerAPI = axios.create({
  baseURL: "http://localhost:8080/costumer/",
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem("user-logged-token")}`,
    },
  },
});

// Websocket
export const socket = io("http://localhost:3337", {
  query: {
    token: localStorage.getItem("user-logged-token"),
  },
});


socket.on("travel_accepted", async (data) => {
  localStorage.setItem("current_travel", JSON.stringify(data));
  await notify("success", "Entregador Encontrado!");
});
