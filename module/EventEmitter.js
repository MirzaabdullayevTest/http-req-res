const EventEmitter = require('events');  // Class // Object konstruktor
const emitter = new EventEmitter()  // Object

// console.log(emitter);
emitter.on('ketmon', (atr) => { // Hodisani ishlatish
    console.log('Hodisa ishladi', atr);
})

emitter.emit('ketmon', { name: 'Tom' })  // e'lon qilish ovoza qilish