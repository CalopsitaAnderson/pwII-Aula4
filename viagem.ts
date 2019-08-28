class viagem {
  //tempoGasto:number
  //  velocidadeMedia:number
  //  rendimentoVeiculo:number

constructor(public tempoGasto:number, public velocidadeMedia:number, public rendimentoVeiculo:number){

}

distancia():number{
    return(this.velocidadeMedia * this.tempoGasto);
}
consumo():number{
    return(this.distancia() / this.rendimentoVeiculo);
}

}