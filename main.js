'use strict';

const metasync = require('metasync');
const concolor = require('concolor');

// console.log('We use metasync:');
// console.log(Object.keys(metasync));
// console.log('CONCOLOR methods: ');
// console.log(Object.keys(concolor));


/*Variant 1 - with simple for*/
console.log(concolor`${'Способ 1'}(b,u,red)`);
for (let i = 0, m = Object.keys(metasync).length; i < m; i++) {
  if ((parseInt(i) + 1) % 2 === 0) {
    console.log(concolor`${'Метод ' + (parseInt(i) + 1)}(b,/blue)` + ' : ' + concolor`${Object.keys(metasync)[i]}(b,u,yellow)`);
  }
  else {
    console.log(concolor`${'Метод ' + (parseInt(i) + 1)}(b,/green)` + ' : ' + concolor`${Object.keys(metasync)[i]}(b,u,blue)`);
  }
}
/*Конец варианта 1*/

console.log();

/*Вариант 2*/
const title = concolor('b,u,  /red');
const name = concolor('b,yellow');
const method = concolor('b,blue');
const name2 = concolor('b,blue');
const method2 = concolor('b,yellow');

console.log(title('Способ 2'));
for (const i in Object.keys(metasync)) {
    if ((parseInt(i) + 1) % 2 !== 0) {
  console.log(name2('Метод ' + (parseInt(i) + 1)) + ' : ' + method2(Object.keys(metasync)[i]));
  }
    else {
  console.log(name('Метод ' + (parseInt(i) + 1)) + ' : ' + method(Object.keys(metasync)[i]));
  }
}
/*Конец варианта 2*/

console.log();

/*Variant 3 - with theme and for...of)*/
const theme = concolor({
  text: 'b,white',
  method1: 'green',
  number: 'blue'
});
console.log('Способ 3');
let i = 0;
for (const method of Object.keys(metasync)) {
  i++;
  console.log(theme.text('Метод ' + i) + theme.method1(' :  ' + method));
}
/*End of variant 3 - with theme and for...of)*/

console.log();
/*Variant 4*/
//arrow-callback
console.log('Способ 4');
Object.keys(metasync).forEach(function(method, number) {
  console.log('Метод ' + (parseInt(number) + 1) + ' : ' + concolor`${method}(red)`);
});
/*End of variant 4*/
