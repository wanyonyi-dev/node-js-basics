const sayHello = require('./hello.js');

sayHello('John');
sayHello('Peter');
sayHello('Rohit');

// Import fs module
const fs = require('fs');

// Present Working Directory: C:\Desktop\nodejstuto
// Making a new directory called ./myFolder:

fs.mkdir('./myFolder', (err) => {
    if(err){
    	console.log(err);
    } else{
    	console.log('Folder Created Successfully');
    }
})
