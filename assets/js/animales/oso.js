import {
    Animal
} from "../animal.js"
export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, id) {
        super(nombre, edad, img, comentarios, sonido, id)
    }
    // AGREGUE EL GRUÑIR POR QUE LO PEDIAN PERO NO CREO QUE FUERA NECESARIO
    //PORQUE ESTOY HERERANDO  LO MISMO POR ANIMAL
    gruñir(sonido) {
        return sonido
    }

}