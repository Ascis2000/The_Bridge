
window.addEventListener("load", (event) => {
    
    inicio();
});

function inicio(){
    console.log("Iniciamos el ejercicio");

    // Ejercicio 01
    ejercicio_01();
    console.log("**********");

    // Ejercicio 02
    ejercicio_02();
    console.log("**********");

    // Ejercicio 03
    ejercicio_03();
    console.log("**********");

    // Ejercicio 04
    ejercicio_04();
    console.log("**********");

    // Ejercicio 05
    ejercicio_05();
    console.log("**********");

    // Ejercicio 06
    ejercicio_06();
}

// Ejercicio 1
/*
Evita el comportamiento por defecto al hacer click. 
Si hago click sobre un enlace, este no me llevará a otra página.
*/
function ejercicio_01(){
    console.log("// Ejercicio 1");

    let selector = document.querySelector("main > article:nth-child(1) > section > p:nth-child(1) > a");
    selector.setAttribute("border", "1px solid red");
    selector.setAttribute('style', 'border: 1px solid red; background-color:#FFFF00');
    selector.href = "http://www.google.com";

    console.log("El selector ha cambiado con el valor =", selector.href);
}

// Ejercicio 2
/*
Al hacer click sobre un elemento van a ocurrir varias cosas:
2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
2.3 Bloques de article o section: Cambia el color de fondo.
*/
function ejercicio_02(){
    console.log("// Ejercicio 2");

    // 2.1 Imágenes
    let selectorImagen = document.querySelector("main > article:nth-child(1) > section > figure:nth-child(5) > img");
    selectorImagen.addEventListener("click", function() {
        this.setAttribute('style', 'border: 1px solid red');
        this.setAttribute('src', './assets/magic-1.gif');

        console.log("2.1 El selector de imagen ha cambiado =", selectorImagen.src);
        console.log("----------");
    });

    // 2.2 Párrafos
    let selectorParrafo = document.querySelector("main > article:nth-child(1) > section > p:nth-child(4)");
    selectorParrafo.addEventListener("click", function() {
        selectorParrafo.setAttribute('style', 'color: red; font-weight:bold; background-color:#FFCC00;');
        console.log("2.2 El selector de párrafo ha cambiado");
        console.log("----------");
    });
    
    // 2.3 Bloques
    let selectorArticulo = document.querySelector("main > article:nth-child(1)");
    selectorArticulo.addEventListener("click", function() {
        this.setAttribute('style', 'background-color:#FDFCD5;');
        console.log("2.3 El selector de articulo ha cambiado");
    });
}

// Ejercicio 3
/*
Cuando el cursor esté sobre alguno de los siguientes elementos, 
seguir las instrucciones siguientes, y devolver dicho elemento 
a su estado original cuando salga el cursor.
3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.
3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
3.3 Bloques de article o section: Color de fondo distinto al de párrafo
*/
function ejercicio_03(){
    console.log("// Ejercicio 3");

    // 3.1 Imágenes
    let selectorImagenes = document.querySelectorAll("main > article:nth-child(2) img");

    // establecemos un atributo dataset.imgOriginal a todas las imagenes con su imagen actual
    for(let i=0; i < selectorImagenes.length; i++){
        selectorImagenes[i].dataset.imgOriginal = selectorImagenes[i].src;
    }
    
    // En el evento 'mouseover', sustituimos la imagen actual por la imagen 'abracadabra.gif'
    for(let i=0; i < selectorImagenes.length; i++){
        selectorImagenes[i].addEventListener('mouseover', function() {
            this.setAttribute('src', './assets/abracadabra.gif');
        });
    }

    // En el evento 'mouseout', sustituimos la imagen 'abracadabra.gif' por su imagen original
    for(let i=0; i < selectorImagenes.length; i++){
        selectorImagenes[i].addEventListener('mouseout', function() {
            this.setAttribute('src', selectorImagenes[i].dataset.imgOriginal);
        });
    }
    console.log("----------");
    
    // 3.2 Párrafos
    let compStyles;
    let selectorParrafos = document.querySelectorAll("main > article:nth-child(2) > section p");
    
    /* 
    Guardamos el estilo actual del color y el background.color del párrafo.
    Establecemos un atributo dataset.color y dataset.bgColor a todos los párrafos.
    */
    for(let i=0; i < selectorParrafos.length; i++) {
        compStyles = window.getComputedStyle(selectorParrafos[i]);
        selectorParrafos[i].dataset.color = compStyles.getPropertyValue("color");
        selectorParrafos[i].dataset.bgColor = compStyles.getPropertyValue("background-color");
    }

    // En el evento 'mouseover', sustituimos los valores del párrafo
    for(let i=0; i < selectorParrafos.length; i++){
        selectorParrafos[i].addEventListener('mouseover', function() {
            this.setAttribute('style', 'color:#FF0000; background-color:#D5FDE2;');
        });
    }

    // En el evento 'mouseout', restauramos los valores del párrafo
    for(let i=0; i < selectorParrafos.length; i++){
        selectorParrafos[i].addEventListener('mouseout', function() {
            this.setAttribute('style', 'color:' + selectorParrafos[i].dataset.color + '; backgroungcolor:' + selectorParrafos[i].dataset.bgColor);
        });
    }
    console.log("----------");

    // 3.3 Sections
    let selectorSection = document.querySelector("main > article:nth-child(2) section");
    /* 
    Guardamos el estilo actual del color y el background.color del section.
    Establecemos un atributo dataset.color y dataset.bgColor al section.
    */
    compStyles = window.getComputedStyle(selectorSection);
    selectorSection.dataset.color = compStyles.getPropertyValue("color");
    selectorSection.dataset.bgColor = compStyles.getPropertyValue("background-color");
    
    // En el evento 'mouseover', sustituimos los valores del section
    selectorSection.addEventListener('mouseover', function() {
        this.setAttribute('style', 'color:#3366FF; background-color:#D6ECF3 !important;');
    });

    // En el evento 'mouseout', restauramos los valores del section
    selectorSection.addEventListener('mouseout', function() {
        this.setAttribute('style', 'color:' + selectorSection.dataset.color + '; backgroungcolor:' + selectorSection.dataset.bgColor);
    });
}

// Ejercicio 4
/*
Crea una función de nombre getRandom que acepte un array con 
valores y devuelva uno de ellos de manera aleatoria.
*/
function ejercicio_04(){
    console.log("// Ejercicio 4");

    const colors = ['red', 'blue', 'green']
    const getRandom = (array) => {

        // obtenemos un numero aleatorio del 0 al 2
        let colorFinal = Math.floor(Math.random() * colors.length);

        // devolvemos el color 
        return colors[colorFinal];
    }

    let resultado = getRandom(colors); // imprime 'red', 'blue' o 'green'
    let miEjercicio_04 = document.getElementById("miEjercicio_04");
    miEjercicio_04.getElementsByTagName("span")[0].style.color = resultado;
    miEjercicio_04.getElementsByTagName("span")[0].style.fontWeight = "bold";
    miEjercicio_04.getElementsByTagName("span")[0].innerHTML = resultado;
}

// Ejercicio 5
/*
Crea una función de nombre getRandom que acepte un array con 
valores y devuelva uno de ellos de manera aleatoria.
*/
function ejercicio_05(){
    console.log("// Ejercicio 5");

    const paletaColores = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51']
    const getRandom = (array) => {

        // obtenemos un numero aleatorio del 0 al 2
        let colorFinal = Math.floor(Math.random() * paletaColores.length);

        // devolvemos el color 
        return paletaColores[colorFinal];
    }
    console.log(getRandom(paletaColores));

    let selectorH2 = document.querySelector("main > article:nth-child(3) > header > h2");
    selectorH2.setAttribute('style', 'background-color:'+getRandom(paletaColores)+';');
}

// Ejercicio 6
/*
Crea una función de nombre getRandom que acepte un array con 
valores y devuelva uno de ellos de manera aleatoria.
*/
function ejercicio_06(){
    console.log("// Ejercicio 6");
    
    let selectorImagenes = document.querySelectorAll("main > article:nth-child(3) > section img");

    const ruta = "./assets/"
    const arr_imagenes = ['magic-1', 'magic-2', 'magic-3', 'magic-4', 'magic-5', 'magic-6'];

    const getRandom = (array) => {

        // obtenemos un numero aleatorio del 0 al 5
        let imgFinal = Math.floor(Math.random() * arr_imagenes.length);

        // devolvemos el color 
        return arr_imagenes[imgFinal];
    }

    for(let i=0; i < selectorImagenes.length; i++) {
        selectorImagenes[i].src = ruta + getRandom(arr_imagenes) + '.gif';
    }
}