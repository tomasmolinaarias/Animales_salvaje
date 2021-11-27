import {
    Animal
} from "../animal.js"
export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, id) {
        super(nombre, edad, img, comentarios, sonido, id)
    }
    // AGREGUE EL CHILLAR POR QUE LO PEDIAN PERO NO CREO QUE FUERA NECESARIO
    //PORQUE ESTOY HERERANDO  LO MISMO POR ANIMAL
    chillar(sonido) {
        return sonido
    }
}