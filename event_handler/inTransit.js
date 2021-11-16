'use strict';

const events = require('../events')

function inTransit(payload) {
  setTimeout(() => {
  console.log('♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦');
  let timeStamp = (new Date).toISOString();
  let pickupEvent = {
    event: 'In Transit',
    time: timeStamp,
    payload: payload
  }
  console.log(`Driver : Transit the order # ${payload.orderID}`);
  console.log("EVENT", pickupEvent);
  console.log('♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n\n');

    events.emit("delivered", payload);
  }, 1500);
}

module.exports = inTransit;