import {
    Aguila
} from "./animales/aguila.js"
import {
    Leon
} from "./animales/leon.js"
import {
    Lobo
} from "./animales/lobo.js"
import {
    Oso
} from "./animales/oso.js"
import {
    Serpiente
} from "./animales/serpiente.js"
import getDatos from "./consulta.js";
//+++++++++++++++++++++++++++++++++++++++++++++++++
const seleccionAnimal = document.getElementById('animal')
const seleccionAnimalEdad = document.getElementById('edad')
const comentarioAnimal = document.getElementById('comentarios')
const botonagregar = document.getElementById('btnRegistrar')
const audio = document.getElementById('player')
const animalesTabla = document.getElementById('Animales')
//--------------------------------------------------
const animaless = []
//----------------------------------------------------
botonagregar.addEventListener('click', async (e) => {
    e.preventDefault()
    //-----------------------IMAGEN---------------------
    const animals = await getDatos();

    //-------------------------------------------------
    const animal = animals.find((animales) => {
        return animales.name === seleccionAnimal.value
    });
    //---------------IIFE------------------------
    const imagen = (function () {
        return ` <img class="card-img-top" src="./assets/imgs/${animal.imagen}" alt=""> `
    })();
    // console.log(imagen)
    const sonidoAnimal = (function () {
        return `src='.assets/sounds/${animal.sonido}'`
    })();
    // console.log(sonidoAnimal)
    //---AGREGANDO  id   let nuevoanimales;
    let nuevoid = `id-${Date.now()}`
    const idanimal = nuevoid;
    //-------- AGREGAR DATOS  Y IF PARA DIFERENCIAR ANIMALES ------
    let nuevoanimales;

    if (seleccionAnimal.value == 'Leon') {
        nuevoanimales = new Leon(
            seleccionAnimal.value,
            seleccionAnimalEdad.value,
            imagen,
            comentarioAnimal.value,
            sonidoAnimal,
            idanimal
        );
    } else if (seleccionAnimal.value == 'Lobo') {
        nuevoanimales = new Lobo(
            seleccionAnimal.value,
            seleccionAnimalEdad.value,
            imagen,
            comentarioAnimal.value,
            sonidoAnimal,
            idanimal
        );
    } else if (seleccionAnimal.value == 'Oso') {
        nuevoanimales = new Oso(
            seleccionAnimal.value,
            seleccionAnimalEdad.value,
            imagen,
            comentarioAnimal.value,
            sonidoAnimal,
            idanimal
        );
    } else if (seleccionAnimal.value == 'Serpiente') {
        nuevoanimales = new Serpiente(
            seleccionAnimal.value,
            seleccionAnimalEdad.value,
            imagen,
            comentarioAnimal.value,
            sonidoAnimal,
            idanimal
        );
    } else if (seleccionAnimal.value == 'Aguila') {
        nuevoanimales = new Aguila(
            seleccionAnimal.value,
            seleccionAnimalEdad.value,
            imagen,
            comentarioAnimal.value,
            sonidoAnimal,
            idanimal
        );
    }
    //----------------------------------------------------------------
    animaless.push(nuevoanimales)
    console.log(animaless)
    console.log(idanimal)
    // //------------------------------------------------------------------------------------------------
    const mostarAnimales = () => {
        animalesTabla.textContent = "";
        animaless.forEach((animal) => {
            animalesTabla.innerHTML += `
                 <div class="card ms-2 col-md-3 mb-3">
                    ${animal.img}
                    <button id="btnAudio" class="btn btn-outline-danger  bg-transparent ">🔈</button>
                </div>
          `;
        });
    };
    mostarAnimales()
});
//arregle el fondo y que la carta se vea  mas decente 
//trate de hacer las opciones pero me enrede
//estoy tratando de hacerlo con un mini projecto de prueba.