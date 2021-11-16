'use strict';
const events = require('./events');
require('./event_mod/driver');
require('./event_mod/vendor');


const inTransit = require('./event_handler/inTransit');
const delivered = require('./event_handler/delivered');

events.on('pickup',(pickup)=>{
    console.log('CORS : RECEIVED THE PICKUP ORDER');
    events.emit('pickup-driver',pickup);
});
events.on('inTransit',inTransit);
events.on('delivered',delivered);

