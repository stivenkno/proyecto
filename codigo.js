/*
<!-- --------------------------------------------------
● Fecha y Hora de publicación: [19/06/2024]
● Versión de su código: [1.0]
● Autores: [Julian Andres Guapacha Rozo]
● Nombre del lenguaje utilizado: [JavaScript]
● Versión del lenguaje utilizado: [ECMAScript 6]
● Universidad Tecnológica de Pereira
● Programa de Ingeniería de Sistemas y Computación
-------------------------------------------------- -->

<!-- --------------------------------------------------
● Descripción del programa: Un programa que permite al usuario
jugar por turnos contra la máquina u otro jugador, el juego 
conocido como piedra, papel o tijera.
-------------------------------------------------- -->






Especificaciones del contrato

Estructura del Proyecto:

-Un área de título. CHECK

-Tres botones para las opciones (piedra, papel, tijera), con una imagen/icono para mostrar el movimiento a hacer.  CHECK

-Una sección para mostrar el resultado del juego.  CHECK

-Elegir la cantidad de intentos. CHECK

-Tener un acumulado de puntos.  CHECK

-Tener modo de juego dos jugadores, o jugar contra la máquina. CHECK 

-Indicar el jugador1 que va ganando. CHECK

-Un archivo CSS para estilizar el juego de manera atractiva y responsiva. CHECK

-Un archivo JavaScript que gestione la lógica del juego. CHECK

Requisitos de Funcionalidad:
Elección del Jugador: Capturar la opción seleccionada por el jugador1 cuando hace clic en uno de los botones. CHECK
Elección de la Computadora: Generar una opción aleatoria para la computadora (piedra, papel o tijera). CHECK 
Determinación del Resultado: Comparar las elecciones del jugador1 y la computadora para determinar el resultado (ganar, perder o empate). CHECK
Actualización del DOM: Mostrar dinámicamente el resultado del juego en la interfaz de usuario.
Características Adicionales :
Contador de Partidas: Implementar un contador que lleve el registro de victorias, derrotas y empates.
Reiniciar Juego: Añadir un botón que permita reiniciar el contador de partidas y comenzar una nueva sesión de juego.
Animaciones: Incluir animaciones para hacer la experiencia de juego más dinámica y atractiva.
Fecha de Entrega: Sábado 22 de junio a las 9:00 am


*/


const btnJugador1 = document.querySelector(".btnOneplayer");  // selector de boton para 1 jugador1
const btn2Jugadores = document.querySelector(".btnTwoPlayers");  // selector de boton para 2 jugadores
const gameMode = document.querySelector(".gameMode");   // Selector para el container de seleccion de modo de juego
const gameZone = document.querySelector(".gameZone");  // Selector para el container de juego
const imgLogo = document.querySelector(".containerLogo");  // selector para el logo
const btnsPosivilitys = document.querySelectorAll(".btnsPosivility"); // selector para los botones de posibilidad
const btnsPosivilitysOne = document.querySelectorAll(".btnsPosivilityOne");
const btnsPosivilitysTwo = document.querySelectorAll(".btnsPosivilityTwo");
//const btnsPosivilitys2 = document.querySelectorAll(".btnsPosivilityTwo"); // selector para los botones de posibilidad
const containerPosivilitys = document.querySelector(".containerPosivilitys");
const containerPosivilitysTwo = document.querySelector(".containerPosivilitysTwo");  // selector para el container de botones de posibilidad
const imgJugadorTwo = document.querySelector(".imgJugadorTwo");  // selector para la imagen del jugador1 2
const contadorp1 = document.querySelector(".contadorp1");   // selector para el contador del jugador1 1
const contadorp2 = document.querySelector(".contadorp2");  //   selector para el contador del jugador1 2
const textEmpate = document.querySelector(".textEmpate");  // selector para el texto de empate
const empate = document.querySelector(".empate");  // selector para el contador de empate
var imgsJugadorOne = document.querySelector(".imgJugadorOne");
var imgsJugadorTwo = document.querySelector(".imgJugadorTwo"); // selector para las imagenes de las opciones

const btnRestart = document.querySelector(".btnRestart");  // selector para el boton de reinicio

let numIntentos = parseInt(prompt("Ingresa la cantidad de intentos"));  // Numero de intentos
let jugadaJugador = "";
let opcionesMaquina = ["buttonPiedra", "buttonPapel", "buttonTijera"];

let contador1 = 0;  //Numero de victorias jugador1 1
let contador2 = 0;  // Numero de victorias jugador1 2
let contadorEmpate = 0; //Numero de empates
let contador3 = 0;  //Numero de intentos

function randomMaquina() {                         //funcion para conseguir una eleccion aleatoria, haciendo uso de la linea 63 

   const indiceAleatorio = Math.floor(Math.random() * opcionesMaquina.length);     //math.floor redondea el valor al mas bajo ejemplo (2.5 = 2)
   console.log(opcionesMaquina[indiceAleatorio]);
   return opcionesMaquina[indiceAleatorio];         //retorna la eleccion aleatoria


}




function compararJugada(jugador1, jugador2) {   //Funcion para comparar jugadas y determinar el resultado del juego


   if (jugador1 === "buttonPiedra") {
      imgsJugadorOne.setAttribute('src', 'imgs/Piedra.png');    //nos muestra la imagen a la que hace referencia la eleccion
   } else if (jugador1 === "buttonPapel") {
      imgsJugadorOne.setAttribute('src', 'imgs/Papel.png');
   } else if (jugador1 === "buttonTijera") {
      imgsJugadorOne.setAttribute('src', 'imgs/Tijera.png');
   }

   if (jugador2 === "buttonPiedra") {
      imgsJugadorTwo.setAttribute('src', 'imgs/Piedra.png');
   } else if (jugador2 === "buttonPapel") {
      imgsJugadorTwo.setAttribute('src', 'imgs/Papel.png');
   } else if (jugador2 === "buttonTijera") {
      imgsJugadorTwo.setAttribute('src', 'imgs/Tijera.png');
   }


   if (jugador2 === "buttonPiedra" && jugador1 === "buttonPiedra") {    //comparacion de jugadas para determinar el resultado ganador y mostrar una alerta 
      contadorEmpate++;  //el contador de empate aumentará en caso de ser true el condicional y mostrar un aviso en pantalla 
      empate.textContent = contadorEmpate;
      alert("EMPATE");
   } else if (jugador2 === "buttonPapel" && jugador1 === "buttonPapel") {
      contadorEmpate++;
      empate.textContent = contadorEmpate;
      alert("EMPATE");
   } else if (jugador2 === "buttonTijera" && jugador1 === "buttonTijera") {
      contadorEmpate++;
      empate.textContent = contadorEmpate;
      alert("EMPATE");
   } else if (jugador2 === "buttonPiedra" && jugador1 === "buttonTijera") {
      contador2++;
      contadorp2.textContent = contador2;
      alert("PERDISTE");
   } else if (jugador2 === "buttonPapel" && jugador1 === "buttonPiedra") {
      contador2++;
      contadorp2.textContent = contador2;
      alert("PERDISTE");
   } else if (jugador2 === "buttonTijera" && jugador1 === "buttonPapel") {
      contador2++;
      contadorp2.textContent = contador2;
      alert("PERDISTE");
   } else if (jugador2 === "buttonPapel" && jugador1 === "buttonTijera") {
      contador1++;
      contadorp1.textContent = contador1;
      alert("GANASTE");
   } else if (jugador2 === "buttonTijera" && jugador1 === "buttonPiedra") {
      contador1++;
      contadorp1.textContent = contador1;
      alert("GANASTE");
   } else if (jugador2 === "buttonPiedra" && jugador1 === "buttonPapel") {
      contador1++;
      contadorp1.textContent = contador1;
      alert("GANASTE");
   }


}

btnRestart.addEventListener("click", (e) => {
   let contador1 = 0;  //Numero de victorias jugador1 1
   let contador2 = 0;  // Numero de victorias jugador1 2
   let contadorEmpate = 0;
   let contador3 = numIntentos;  //Numero de intentos

   contadorp1.textContent = contador1;
   contadorp2.textContent = contador2;
   empate.textContent = contadorEmpate;

});


btnJugador1.addEventListener("click", (e) => {     //Boton para iniciar el juego del  jugador 1

   imgLogo.style.display = "none";                 //ocultamos la pantalla de entrada 
   gameMode.style.display = "none";
   gameZone.style.display = "flex";

   containerPosivilitysTwo.style.visibility = "hidden";         //ocultamos la imagen, pero de igual manera sigue ocupando espacio en pantalla. 
   textEmpate.style.display = "flex";
   empate.style.display = "flex";

   btnsPosivilitys.forEach(function(boton) {                //interactua para cada uno de los botones 

      boton.addEventListener('click', function() { //Añade un evento de click a cada botón para realizar y comparar jugadas, y controla los intentos.
         let jugadaJugador = boton.classList[0];
         let jugadaMaquina = randomMaquina();

         compararJugada(jugadaJugador, jugadaMaquina);

         contador3++;


         if (contador3 == numIntentos) {
            alert("FIN DEL JUEGO");
         }

      });

   });




   ;
})



btn2Jugadores.addEventListener("click", (e) => {           //Boton para iniciar el juego del  jugador 2

   imgLogo.style.display = "none";
   gameMode.style.display = "none";
   gameZone.style.display = "flex";
   textEmpate.style.display = "flex";
   empate.style.display = "flex";


   btnsPosivilitysOne.forEach(function(boton) {

      boton.addEventListener('click', function() {
         jugadaJugador = boton.classList[0];


         if (contador3 == numIntentos) {
            alert("FIN DEL JUEGO");
         }

      });

   });


   btnsPosivilitysTwo.forEach(function(boton) {       // Añade un evento de click a cada botón para realizar y comparar jugadas del jugador 1 y jugador 2, y controla los intentos.

      boton.addEventListener('click', function() {
         let jugadajugador2 = boton.classList[0];


         compararJugada(jugadaJugador, jugadajugador2);

         contador3++;


         if (contador3 == numIntentos) {
            alert("FIN DEL JUEGO");
         }

      });

   });




   ;
})