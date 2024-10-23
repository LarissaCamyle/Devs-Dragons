import { Personagem } from "./classePersonagem.js"

export class Mago extends Personagem {
    elementoMagico
    levelMagico
    inteligencia
    tipo = 'Mago'

    constructor(nome, level, elementoMagico, levelMagico, inteligencia){
        //construtor da classe personagem
        super(nome, level)
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }

    //pega a funcao da classe personagem
    obterInsignia(){
        //caso seja maior ou igual a 8 
        if(this.levelMagico >= 8){
            return `Mestre do ${this.elementoMagico}`
        }
        //se nao executa o obterInsignia da classe personagem
        return super.obterInsignia()
    }
}