"use strict";
function delivered(payload) {
  setTimeout(() => {
    
    console.log(`♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠ ♠`);
    // console.log(`DRIVER: delivered up ${payload.orderId}`);
    let date = new Date();
    let deliveredEvent = {
      event: "delivered",
      time: date.toISOString(),
      payload: payload,
    };
    console.log("EVENT", deliveredEvent);
  }, 1);
  }
  
module.exports = delivered;
