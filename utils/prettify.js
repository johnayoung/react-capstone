'use strict';

const prettify = (str) => {
  return str.split('-').map((part) => {
    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join(' ');
};

console.log(prettify('game-of-thrones-characters'));

module.exports = prettify;