'use strict';
const events = require('../events');
const pickup = require('../event_handler/pickup')

events.on('pickup-driver',pickup);