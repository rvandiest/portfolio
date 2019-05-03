var fs = require('fs')

fs.copyFile('./package.json', './build/package.json', (err) => {
    if (err) throw err;
});

fs.copyFile('./package-lock.json', './build/package-lock.json', (err) => {
    if (err) throw err;
});

fs.copyFile('./readme.md', './build/readme.md', (err) => {
    if (err) throw err;
});

fs.copyFile('./server.js', './build/server.js', (err) => {
    if (err) throw err;
});

fs.copyFile('./https.js', './build/https.js', (err) => {
    if (err) throw err;
});

fs.copyFile('./homecontroller.js', './build/homecontroller.js', (err) => {
    if (err) throw err;
});

fs.copyFile('./botcontroller.js', './build/botcontroller.js', (err) => {
    if (err) throw err;
});

fs.copyFile('./dialogflow_credentials.json', './build/dialogflow_credentials.json', (err) => {
    if (err) throw err;
});