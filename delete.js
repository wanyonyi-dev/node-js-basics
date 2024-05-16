const fs = require('fs');

fs.unlink('./myFolder/myFileSync.txt', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('File Deleted Successfully!')
})
