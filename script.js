// const socket = io('http://localhost:8888');

// console.log(socket);

// socket.emit('message', { msg: 'hello world' });

// DOM

// ________________________________________________________________________

// constructor's name

window; // Window

const htmlDocument = window.document; // HTMLDocument

const head = window.document.head; // HTMLHeadElement

const body = window.document.body; // HTMLBodyElement

const div = window.document.createElement('div'); // HTMLDivElement

// console.log(window.constructor.name);

// ________________________________________________________________________

// node types

window.document.querySelector('h1').nodeType; // ELEMENT_NODE

window.document.querySelector('h1').firstChild.nodeType; // TEXT_NODE

console.log(window.document.querySelector('#my-custom-comment').firstChild); // Element

// ________________________________________________________________________
