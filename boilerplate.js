const fs = require('fs');
// console.log(fs);
const folderName = process.argv[2] || 'Project'

// fs.mkdir('practice', { recursive: true }, (err) => {
//     console.log("in the callback")
//     if (err) throw err;
//   }); 
// fs.mkdirSync('cats');
//   console.log("after mkdir")
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/app.js`)
fs.writeFileSync(`${folderName}/styles.css`)