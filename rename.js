const fs = require('fs');

fs.rename('./newFolder/newFile.txt', './newFolder/newFileAsync.txt', (err)=>{
    if(err){
    	console.log(err);
        return;
    }
    console.log('File renamed successfully!')
})
