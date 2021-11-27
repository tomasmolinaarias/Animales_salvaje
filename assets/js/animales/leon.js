import {
    Animal
} from "../animal.js"
export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, id) {
        super(nombre, edad, img, comentarios, sonido, id)
    }
    // AGREGUE EL RUGIR POR QUE LO PEDIAN PERO NO CREO QUE FUERA NECESARIO
    //PORQUE ESTOY HERERANDO  LO MISMO POR ANIMAL
    rugir(sonido) {
        return sonido
    }
}