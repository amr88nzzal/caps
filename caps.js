'use strict';
const pickupHandler = require('./handlers/pickup');
const inTransit = require('./handlers/inTransit');
const delivered = require('./handlers/delivered');


require('dotenv').config()
const PORT = process.env.PORT || 3030
const io = require('socket.io')(PORT);
io.on('connection', socket => {
  console.log(`clientID : ${socket.id} ic connected with main system `)
})

const caps = io.of('/caps'); // namespace
caps.on('connection', socket => {
  console.log(`clientID : ${socket.id} ic connected with caps (namespace) `);

  socket.on("pickup", (payload) => {
    pickupHandler(payload)
    caps.emit('pickup-d', payload)
  });
  socket.on("inTransit", (payload) => {
    inTransit(payload)
    caps.emit('delivered-d', payload)
  });
 
  socket.on("delivered", (payload) => {
    delivered(payload)
    caps.emit('delivered-v', payload)
  });
 
})
module.exports=caps
