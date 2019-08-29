"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    //nome : string   // sem essa linha basta adicionar ao construtor public antes de nome dentro de ()e apagar a linha de baixo
    function Aluno(nome) {
        this.nome = nome;
        // this.nome = nome
    }
    Aluno.prototype.exibir = function () {
        console.log("nome:" + this.nome);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
