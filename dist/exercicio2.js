"use strict";
exports.__esModule = true;
var viagem_1 = require("./viagem"); //informa de onde vem os dados 
var valores = new viagem_1.viagem(2, 100, 10); // como foi usado constructor essa e a forma de se declarar  todos os valores dentro do ()
console.log(valores.distancia());
console.log(valores.consumo());
