export class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.img = img;
        this.comentarios = comentarios;
        this.sonido = sonido;
    }
    //GETTER
    get getNombre() {
        this.nombre = nombre;
    }
    get getEdad() {
        this.edad = edad;
    }
    get getImg() {
        this.img = img;
    }
    get getComentario() {
        this.comentarios = comentarios;
    }
    get getSonido() {
        this.sonido = sonido;
    }
    //SETTER
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    set setEdad(edad) {
        this.edad = edad;
    }
    set setImg(img) {
        this.img = img;
    }
    set setComentario(comentarios) {
        this.comentarios = comentarios;
    }
    set setSonido(sonido) {
        this.sonido = sonido;
    }
}