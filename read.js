const fs = require('fs');

fs.readFile('./myFolder/myFile.txt', {encoding: 'utf-8'}, (err, data) => {
    if(err){
    	console.log(err);
        return;
    } else {
    	console.log('File read successfully! Here is the data');
        console.log(data);
    }
})
