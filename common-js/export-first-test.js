const path = require('path');

module.exports.logDebug = () => {
    console.log(path.isAbsolute('.'));
}
module.exports.logError = () => {
    console.log(path.dirname('index.js'));
}

const getName = () => {
    return 'Slim Shady';
}
exports.getName = getName;

exports.getLocation = () => {
    return 'hell';
}