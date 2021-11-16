'use strict';
const events = require('../events')
function pickup(payload) {
  setTimeout(() => {

  console.log('♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥');
  let timeStamp = (new Date).toISOString();
  let pickupEvent = {
    event: 'pickup',
    time: timeStamp,
    payload: payload
  }
  console.log(`Driver : Pickup the order # ${payload.orderID}`);
  console.log("EVENT", pickupEvent);
  console.log('♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥\n\n');

    events.emit("inTransit", payload);
  }, 1000);
  }

module.exports = pickup;