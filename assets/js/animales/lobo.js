import {
    Animal
} from "../animal.js"
export class Lobo extends Animal {

    constructor(nombre, edad, img, comentarios, sonido, id) {
        super(nombre, edad, img, comentarios, sonido, id)
    }
    // AGREGUE EL AULLAR POR QUE LO PEDIAN PERO NO CREO QUE FUERA NECESARIO
    //PORQUE ESTOY HERERANDO  LO MISMO POR ANIMAL
    aullar(sonido) {
        return sonido
    }
}