const firstModule = require('./export-first-test');
const secondModule = require('./export-second');
const {someFunction, someOtherFunction, aThirdFunction} = require('./export-second'); // use destruction

firstModule.logDebug();
firstModule.logError();
console.log('My name is', firstModule.getName());
console.log('I am in', firstModule.getLocation())

console.log('An exported constant: ', secondModule.SOME_CONSTANT);
secondModule.someFunction();
secondModule.someOtherFunction();

someFunction();
someOtherFunction();
aThirdFunction('Rick');