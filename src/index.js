// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react'; //createElement
import ReactDOM from 'react-dom';  //appendChild

const container = document.getElementById("app")

const element = <h1>Hola a todos!!</h1>

ReactDOM.render(element, container);
//ReactDOM.render(que, donde);
