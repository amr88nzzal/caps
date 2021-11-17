
'use strict'
const PORT=process.env.PORT || 3000
const io = require('socket.io-client')
const host =`http://localhost:${PORT}`
const socket=io.connect(`${host}/caps`)

const faker= require('faker')
setTimeout(() => {
  
  let payload = {
    store: faker.company.companyName(),
    orderId: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  socket.emit('pickup',payload)
}, 1000);


socket.on('delivered-v',(payload)=>{
  setTimeout(() => {
    console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
    process.exit();
  }, 1500);
})
