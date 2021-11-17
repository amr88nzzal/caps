"use strict";

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const io = require("socket.io-client");
const host = `http://localhost:${PORT}`;
const socket = io.connect(`${host}/caps`);

socket.on("pickup-d", (payload) => {
  console.log(`DRIVER: Picked up ${payload.orderId}`);
  socket.emit("inTransit", payload);
});

socket.on("delivered-d", (payload) => {
  setTimeout(() => {
    
    socket.emit("delivered", payload);
    console.log(`DRIVER: delivered up ${payload.orderId}`);
  }, 5000);
    
  })
