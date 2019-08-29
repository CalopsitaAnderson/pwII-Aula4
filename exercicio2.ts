import {viagem} from "./viagem"   //informa de onde vem os dados 
let valores = new viagem(2,100,10)// como foi usado constructor essa e a forma de se declarar  todos os valores dentro do ()

console.log(valores.distancia())
console.log(valores.consumo())