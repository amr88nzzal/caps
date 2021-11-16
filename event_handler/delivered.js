'use strict';

const events = require('../events')

function delivered(payload) {
    setTimeout(() => {
  console.log('♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣');
  let timeStamp = (new Date).toISOString();
  let deliveredEvent = {
    event: 'delivered',
    time: timeStamp,
    payload: payload
  }
  console.log(`Driver : Delivered the order # ${payload.orderID}`);
  console.log("EVENT", deliveredEvent);
  console.log('♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣\n');

    events.emit("received", payload);
  }, 3000);
}

module.exports = delivered;