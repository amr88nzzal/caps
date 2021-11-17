"use strict";
function inTransit(payload) {
setTimeout(() => {
  console.log(`♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣ ♣`);
  console.log(`DRIVER: in transit ${payload.orderId}`);
    let date = new Date();
    let inTRansitEvent = {
      event: "in-transit",
      time: date.toISOString(),
      payload: payload,
    };
    console.log("EVENT", inTRansitEvent);
  }, 3000);
}

module.exports = inTransit;
