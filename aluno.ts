export class Aluno {

    //nome : string   // sem essa linha basta adicionar ao construtor public antes de nome dentro de ()e apagar a linha de baixo
    constructor(public nome:string){
       // this.nome = nome
    }
       exibir(){
           console.log("nome:"+ this.nome)
       }
    
}