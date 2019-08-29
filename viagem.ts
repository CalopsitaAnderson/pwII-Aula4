class viagem {
  //tempoGasto:number
  //  velocidadeMedia:number
  //  rendimentoVeiculo:number

constructor(public tempoGasto:number, public velocidadeMedia:number, public rendimentoVeiculo:number){

}

distancia():number{
    return(this.velocidadeMedia * this.tempoGasto);// essas são  os comandos ou funções que foram passadas  no pdf 
}
consumo():number{
    return(this.distancia() / this.rendimentoVeiculo);
}

}