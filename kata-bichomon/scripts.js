
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
    console.log("**********");

    // Ejercicio 07
    ejercicio_07();
    console.log("**********");
}

// Ejercicio 1
/*
Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
*/
function ejercicio_01(){
    console.log("// Ejercicio 1");

    let gen_1 = document.getElementById("gen-1");
    gen_1.innerHTML = "Generasión 1 Pokimon";
}

// Ejercicio 2
/*
Cambia el color de fondo de la primera generación de Pokimon.
*/
function ejercicio_02(){
    console.log("// Ejercicio 2");

    let selector = document.querySelectorAll('div.infocard-list.infocard-list-pkmn-lg');
    selector[0].setAttribute('style', 'background-color:#FFCC00;');
}

// Ejercicio 3
/*
Imprime por consola la URL de la página.
*/
function ejercicio_03(){
    console.log("// Ejercicio 3");
    console.log("URL", window.location.href);

    let ejercicio_03 = document.getElementById("ejercicio_03");
    ejercicio_03.setAttribute('style', 'background-color:#FFCC00;');
    ejercicio_03.innerHTML = "Ejercicio 3. la URL es " + window.location.href;
}

// Ejercicio 4
/*
Imprime por consola el dominio de la página.
*/
function ejercicio_04(){
    console.log("// Ejercicio 4");
    console.log("Dominio", window.location.hostname);

    let ejercicio_04 = document.getElementById("ejercicio_04");
    ejercicio_04.setAttribute('style', 'background-color:#FFCC00;');
    ejercicio_04.innerHTML = "Ejercicio 4. la URL es " + window.location.hostname;
}

// Ejercicio 5
/*
Imprime todos los nodos de imagen.
*/
function ejercicio_05(){
    console.log("// Ejercicio 5");

    // Seleccionamos todos los nodos de imagen
    let selectorImagenes = document.querySelectorAll('img'); 
    console.log(selectorImagenes);
}

// Ejercicio 6
/*
Sustituye el atributo "src" de todas las imágenes por 
este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
*/
function ejercicio_06(){
    console.log("// Ejercicio 6");
    console.log("Dominio", window.location.hostname);

    // Seleccionamos todos los nodos de imagen
    let selectorImagenes = document.querySelectorAll('img'); 
    for(let i=0; i < selectorImagenes.length; i++){
        selectorImagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
    }
}

// Ejercicio 7
/*
Cambia el fondo de todos los infocard-lg-data text-muted para todos los 
Pokimon voladores itype flying
*/
function ejercicio_07(){
    console.log("// Ejercicio 7");
    console.log("Dominio", window.location.hostname);

    let padre;
    // Seleccionamos todos los nodos de pokemon con class='itype flying'
    let selectorVoladores = document.querySelectorAll("main > div span.infocard-lg-data.text-muted small a[class='itype flying']"); 

    for(let i=0; i < selectorVoladores.length; i++){
        padre = selectorVoladores[i].parentNode.parentNode;
        padre.setAttribute('style', 'background-color:#FFFF00;');
    }
}

