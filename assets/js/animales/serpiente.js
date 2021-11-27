import {
    Animal
} from "../animal.js"
export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, id) {
        super(nombre, edad, img, comentarios, sonido, id)
    }
    // AGREGUE EL SISEAR POR QUE LO PEDIAN PERO NO CREO QUE FUERA NECESARIO
    //PORQUE ESTOY HERERANDO  LO MISMO POR ANIMAL
    sisear(sonido) {
        return sonido
    }
}