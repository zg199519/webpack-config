import './components/list/list.css';
import './components/list/list.js';


// console.log(_.join(['Hello', 'webpack'], ' '));

// function component() {
//     var element = document.createElement('div');
//     var button = document.createElement('button');
//     var br = document.createElement('br');
//     button.innerHTML = 'Click me and look at the console!';
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.appendChild(br);
//     element.appendChild(button);
//     button.onclick = e => import(/* webpackChunkName: "home" */ './components/home/home.js').then(module => {
//       var home = module.default;
//       home();
//     });
//     return element;
// }
//
// document.body.appendChild(component());