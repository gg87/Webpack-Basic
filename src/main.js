// var map = require('lodash/map');

// function square(n) {
//     return n*n;
// }

// console.log(map([1,2,3,4,5,6], square));

import { map } from 'lodash';
// import template from './numberlist.hbs';

let numbers = map([1,2,3,4,5,6], n => n*n);

// document.getElementById("app-container").innerHTML = template({numbers});

setTimeout( () => {
    require(['./numberlist.hbs'], template => {
        document.getElementById("app-container").innerHTML = template({numbers});
    })
}, 2000);
