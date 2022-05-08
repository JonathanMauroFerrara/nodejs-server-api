//event emitter

const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('Message', (name, age) =>{ // register the event
    console.log(`Hi i'm ${name} and i have ${26} years old`);
});

customEmitter.emit('Message'); //emit the event, must have the same name 'Message' in this case.

