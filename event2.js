const EventEmitter = require('events');
const myEvent = new EventEmitter();

// Listener function
const greetBirthday = (name, newAge) => {
    // name = John
    // newAge = 24
    console.log(`Happy Birthday ${name}. You are now {newAge}!`);
}

// Listening for the birthdayEvent
myEmitter.on('birthdayEvent', greetBirthday);

// Emitting the birthdayEvent with some extra parameters
myEmitter.emit('birthdayEvent', 'John', '24');
