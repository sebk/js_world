const SOME_CONSTANT = 0;

// named function
function someFunction() {
    console.log('You called some function');
}

const someOtherFunction = () => {
    console.log('some other function')
}

module.exports = {
    SOME_CONSTANT,
    someFunction,
    someOtherFunction,
    aThirdFunction: function(name){
        console.log(`Hi ${name}!`);
    },
}