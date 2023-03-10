(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  const foo = 'foo';

  function sayHello() {
    console.log('hello');
  }

  sayHello();
  console.log('index:', foo);

}));
