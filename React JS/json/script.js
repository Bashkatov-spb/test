'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

const arr = [1,3,4,5,6];

for (let key in options) {
    console.log(options[key]);
}