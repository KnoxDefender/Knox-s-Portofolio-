process.on('')


console.log(global.luckyNum);
global.luckyN ='23';
console.log(global.luckyNum);

process.on('exit', function(){
    //do somthing
    })
    const { EventEmitter } = require('events');
    const eventemitter = new EventEmitter();
 eventemitter.on('lunch', () => {
    console.log('Eat sleep code repeat')
 })
 eventemitter.emit('lunch');
 eventemitter.emit('lunch');
 
 const { readFile} = require( 'fs'). promises;

 async function hello() {
 const file = await readFile('./hello.txt', 'utf8');
 }
 const express = require ('express');
 