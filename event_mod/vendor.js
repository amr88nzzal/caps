'use strict';

const faker = require('faker');
const events = require('../events')
// require('./driver');


setTimeout(() => {
let order = {
    orderID: faker.datatype.uuid(),
    store: faker.company.companyName(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
};
events.emit('pickup', order)
}, 2000);


events.on('received', (payload) => {
    console.log(`VENDOR: THANK YOU ${payload.customer}\n=============================`);
})