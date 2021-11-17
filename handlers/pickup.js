"use strict";

function pickup(payload) {
  console.log(`♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥`);
  // console.log(`DRIVER: Picked up ${payload.orderId}`);
  let date = new Date();
  let pickupEvent = {
    event: "pickup",
    time: date.toISOString(),
    payload: payload,
  };
  console.log("EVENT", pickupEvent);
}

module.exports = pickup;
