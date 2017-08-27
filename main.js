'use strict';

const metasync = require('metasync');

//console.log('We use metasync:');
//console.log(Object.keys(metasync));
const concolor = require('concolor');
//console.log('CONCOLOR methods: ');
//console.log(Object.keys(concolor));
// let a = Object.keys(metasync);
const a = Object.keys(metasync);

for (let i = 0, m = a.length;  i < m;  i++) {
  const b = Object.keys(metasync)[i];
  console.log( 'Метод ' + (parseInt(i) + 1) + ' : ' + '' + concolor`${b}(blue/red)`);
}

//onsole.log(concolor`Hello ${'World'}(blue,u) blue underline`);

console.log(concolor`Hello ${'World'}(blue) blue`);
console.log(concolor`Hello ${'World'}(/red) on red`);
console.log(concolor`Hello ${'World'}(white/yellow,b) bold white on yellow`);
console.log(concolor`Hello ${'World'}(b) bold`);
console.log(concolor`Hello ${'World'}(b,/blue) bold on blue`);
console.log(concolor`Hello ${'World'}(b,u,yellow) bold underline yellow`);
console.log(concolor`Hello ${'World'}(blue,u) blue underline`);
console.log(concolor`Hello ${'World'}(b,black/green) bold black on green`);
 
console.log(concolor`
  Client on ${'192.168.1.1'}(black/green)
  connected to ${'SERVER'}(b,red)
  at ${new Date().toUTCString()}(b,blue)
`);

const err = concolor('b,yellow/red');
const inf = concolor('i,white');
 




const theme = concolor({
  caption: 'b,white',
  text: 'green',
  link: 'u,yellow'
});
 
console.log(theme.caption('Caption example'));