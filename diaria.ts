class diaria {

constructor (public  qtdHoras:number, public valorHoras:number, public horaAdicional:number){}



total() : number {
    return (this.valorHoras + this.horaAdicional * (this.qtdHoras - 1) )
}
}