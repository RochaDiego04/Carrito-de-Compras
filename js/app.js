const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListener();
function cargarEventListener() {
    //Cuando se agrega un curso al presionar el boton de "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

//Funciones
function agregarCurso(e) {
    e.preventDefault();

    if ( e.target.classList.contains('agregar-carrito') ) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//Leer contenido HTML al que dimos click y extrae la info del curso
function leerDatosCurso(curso) {
    
    //Objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        ID: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    console.log(infoCurso);
}