/**
 * Os Module
 */
const os = require('os');
const user = os.userInfo();
// const plat= os.platform();
const userData = require('./user');

/**
 * File System Module
 */

const fs = require('fs');
let date = new Date();
let message = `User "${user.username}" started app at ${date}`

/**
 * Write into File 
 */
if (userData.addLog()) {
    fs.appendFile("hello.txt", message, (err) => {
        if (err) {
            console.log('not able to append');
        }
    });
}
