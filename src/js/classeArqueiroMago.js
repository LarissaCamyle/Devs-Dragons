import { Personagem } from "./classePersonagem.js";
import { Arqueiro } from "./classeArqueiro.js";
import { Mago } from "./classeMago.js";

export class ArqueiroMago extends Personagem{
    ladoArqueiro
    ladoMago
    tipo = 'ArqueiroMago'

    constructor(nome, level, destreza, elementoMagico, levelMagico, inteligencia){
        super(nome,level)
        this.ladoArqueiro = new Arqueiro(nome, level, destreza)
        this.ladoMago = new Mago(nome, level, elementoMagico, levelMagico, inteligencia)
    }

    obterInsignia(){
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}