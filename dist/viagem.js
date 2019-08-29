var viagem = /** @class */ (function () {
    //tempoGasto:number
    //  velocidadeMedia:number
    //  rendimentoVeiculo:number
    function viagem(tempoGasto, velocidadeMedia, rendimentoVeiculo) {
        this.tempoGasto = tempoGasto;
        this.velocidadeMedia = velocidadeMedia;
        this.rendimentoVeiculo = rendimentoVeiculo;
    }
    viagem.prototype.distancia = function () {
        return (this.velocidadeMedia * this.tempoGasto); // essas são  os comandos ou funções que foram passadas  no pdf 
    };
    viagem.prototype.consumo = function () {
        return (this.distancia() / this.rendimentoVeiculo);
    };
    return viagem;
}());
