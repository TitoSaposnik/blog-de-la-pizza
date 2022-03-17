//querySelector 
const heading = document.querySelector('.header__texto h2'); //0 o 1 elemento
//heading.textContent = 'Headin Prueba';
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); //0 a todos los elmentos
//enlaces[1].textContent = 'Buevo Benlance';
//enlaces[1].classList.add('nueva-clase')
//enlaces[0].classList.remove('navegacion__enlace')
console.log(enlaces)

//getElementbyId
const heading2 = document.getElementById('parrafo__heading')
//heading2.innerHTML = 'Hola pa!'
//heading2.translate = false
console.log(heading2)

//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')// 1- se usa create element y el nombre de la etiqueta siempre tiene que estar en mayuscula.
nuevoEnlace.href  = 'index.html' // 2- Agrega el href
nuevoEnlace.textContent = 'Tienda Virtual'// 3-  Agrega el texto
nuevoEnlace.classList.add('navegacion__enlace')// 4- Agrega la clase
const navegacion = document.querySelector('.navegacion')// 5- Selecciono el selector
navegacion.appendChild(nuevoEnlace); // 6- Agregar al documento

//Eventos
console.log("Puesto 1")

window.addEventListener('load', function(){ //load espera a que el JS y los archivos que dependen del html estén listos
    console.log("Puesto 2")
})

window.onload = function(){
    console.log("Puesto 3")
}

document.addEventListener('DOMContentLoaded', function(){ //solo espera por el html, pero no espera css o imagenes
    console.log("Puesto 4")
})

console.log('Puesto 5')

window.onscroll = function(){
    console.log('scroll')
}