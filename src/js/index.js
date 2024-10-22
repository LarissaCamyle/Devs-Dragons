import { Personagem } from "./classePersonagem.js";
import { PersonagemView } from "./personagem-view.js";

const personagemPedro = new Personagem('pedro', '10', '7', '6', 'Mago', 'maguinho');
const personagemJose = new Personagem('jose', '10', '7', '1', 'Arqueiro', 'maguinho');

const personagens = [personagemPedro, personagemJose]

new PersonagemView(personagens).render()