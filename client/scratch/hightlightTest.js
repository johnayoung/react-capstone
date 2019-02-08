const hljs = require('highlight.js');

const obj = {
    hello: 'world'
}

const newObj = hljs.highlightAuto(JSON.stringify(obj, null, 4)).value;

console.log(newObj);