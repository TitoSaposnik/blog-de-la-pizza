// //querySelector 
// const heading = document.querySelector('.header__texto h2'); //0 o 1 elemento
// //heading.textContent = 'Headin Prueba';
// console.log(heading);

// //querySelectorAll
// const enlaces = document.querySelectorAll('.navegacion a'); //0 a todos los elmentos
// //enlaces[1].textContent = 'Buevo Benlance';
// //enlaces[1].classList.add('nueva-clase')
// //enlaces[0].classList.remove('navegacion__enlace')
// console.log(enlaces)

// //getElementbyId
// const heading2 = document.getElementById('parrafo__heading')
// //heading2.innerHTML = 'Hola pa!'
// //heading2.translate = false
// console.log(heading2)

// //Generar un nuevo enlace
// const nuevoEnlace = document.createElement('A')// 1- se usa create element y el nombre de la etiqueta siempre tiene que estar en mayuscula.
// nuevoEnlace.href  = 'index.html' // 2- Agrega el href
// nuevoEnlace.textContent = 'Tienda Virtual'// 3-  Agrega el texto
// nuevoEnlace.classList.add('navegacion__enlace')// 4- Agrega la clase
// const navegacion = document.querySelector('.navegacion')// 5- Selecciono el selector
// navegacion.appendChild(nuevoEnlace); // 6- Agregar al documento

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

// //Seleccionar un elemento y asociarles un evento (click)

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();//nos permite ver el evento ya que cancela la recarga de la page

//     console.log('Formulario Enviado')
// })

//Evento Submit
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //Validaciones del formulario
    const {nombre, celular, email, mensaje} = datos;

    if(nombre === '' || celular === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios!', true)
    return; //Corta la ejecucion del codigo
    }
    mostrarAlerta('Datos cargados correctamente')
})

//Eventos de los inputs y los textareas
const datos = {
    nombre:'',
    celular:'',
    email:'',
    mensaje:''
}

const nombre = document.querySelector('#nombre');
const celular = document.querySelector('#celular');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
celular.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e){
    datos[e.target.id] = e.target.value; //Agrega lo escrito al objeto.
    console.log(datos)
}

// //Muestra un error en pantalla
// function mostrarError(mensaje){
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');

//     formulario.appendChild(error);

//     setTimeout(()=>{ //Para que desaparezca el error pasado los 3seg
//         error.remove();
//     },3000);
// }

// //Muestra mensaje de datos correctos
// function datosCorrectos(mensaje){
//     const correcto = document.createElement('P');
//     correcto.textContent = mensaje;
//     correcto.classList.add('correcto')

//     formulario.appendChild(correcto);

//     setTimeout(()=>{
//         correcto.remove();
//     },5000)
// }

//Refactorizar codigo.
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error){
        alerta.classList.add('error')
    }else{
        alerta.classList.add('correcto')
    }
    formulario.appendChild(alerta);

    setTimeout(()=>{
        alerta.remove();
    },3000)
}