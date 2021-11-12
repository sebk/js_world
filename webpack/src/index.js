import _ from 'lodash';
import './style.css';
import Bug from './new_bug.png';
import Data from './data.xml';
import Notes from './data.csv';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myImage = new Image();
    myImage.src = Bug;
    element.appendChild(myImage);

    console.log(Data);
    console.log(Notes);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());