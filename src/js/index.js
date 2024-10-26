import { Personagem } from "./classePersonagem.js";
import { PersonagemView } from "./personagem-view.js";
import { Mago } from "./classeMago.js";
import { Arqueiro } from "./classeArqueiro.js";
import { ArqueiroMago } from "./classeArqueiroMago.js";
import { Guerreiro } from "./classeGuerreiro.js";

const mago = new Mago('Lucas', 9, 'fogo', 9, 5)
const arqueiro = new Arqueiro('Larissa', 9, 10)
const arqueiroMago = new ArqueiroMago('Larissa', 4, 10, "Gelo", 10, 20)
const guerreiro = new Guerreiro('Lucas', 10)

const personagens = [mago, arqueiro, arqueiroMago, guerreiro]

new PersonagemView(personagens).render()
