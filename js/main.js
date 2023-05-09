// CLASE 1

/* alert("toco volver a empezar"); */

// ----- DEFINIENDO VARIABLES

/* let nombre = 'Sebastian'; //Variable String o cadena de texto */
/* let apellido = "Quintero"; */
/* var edad = 35 //Variable de tipo númerica */
/* const anioNacimiento = 1987; //Constante que posee dato del tipo numero */
/*  */
/* nombre = "Cristiano"; */
/* apellido = "Ronaldo"; */
/*  */
/* console.log(nombre); */
/* console.log(apellido); */
/* console.log(anioNacimiento); */

// ----- VALORES DE VARIABLES

/* let valor1 = 100; //numero entero integer */
/* let valor2 = 200.75; //numero decimal float */
/* let valor3 = "Sebas QR"; */
/*  */
/* console.log(valor1); */
/* console.log(typeof valor1); */
/* console.log(valor2); */
/* console.log(typeof valor2); */
/* console.log(valor3); */
/* console.log(typeof valor3); */

// ----- OPERACIONES BASICAS

/* let numeroA = 10; */
/* let numeroB = 30; */
/* const numeroC = 30; */
/*  */
/* let resultado = numeroA + numeroB; */
/* console.log(resultado); */
/*  */
/* let resultado2 = numeroA - numeroB; */
/* console.log(resultado2); */
/*  */
/* let resultado3 = numeroA * numeroB; */
/* console.log(resultado3); */
/*  */
/* let resultado4 = numeroA / numeroB; */
/* console.log(resultado4); */

// ----- CONCATENACIÓN

/* let texto1 = "Coder"; */
/* let texto2 = "House"; */
/* let espacio = " "; */
/* let numero = "100"; */
/*  */
/* let resultado = texto1 + texto2; */
/* let resultado2 = texto1 + espacio + texto2; */
/* let resultado3 = texto1 + texto2 + espacio + numero; */
/* let resultado4 = texto1 + texto2 + "\n" + numero; // salto de línea \n */
/*  */
/* console.log(resultado); */
/* console.log(resultado2); */
/* console.log(resultado3); */
/* console.log(resultado4); */

// ------ EJEMPLO

/* let nombre = "Sebastian"; */
/* let apellido1 = "Quintero"; */
/* let apellido2 = "Ruiz"; */
/* let edad = "34"; */
/*  */
/* let titulo = "Datos del Jugador:\n\n"; */
/* let texto = titulo + "Nombre: " + nombre + "\n" + "Apellido: " +  *//* apellido1 + " " + apellido2 + "\n" + "Edad: " + edad;  */
/*  */
/* alert(texto); */
/* console.log (texto); */

// ------- PROMPT

/* let nombreIngresado = prompt("Ingrese su Nombre y Apellido:"); */
/* let edadIngresado = prompt("Ingrese su Edad:") */
/* let emailIngreado = prompt("Ingrese su E-mail:") */
/*  */
/* alert("Nombre y Apellido:" + "\n\n" + nombreIngresado + "\n\n" +  *//* "Edad:" + "\n\n" + edadIngresado + "\n\n" + "E-mail:" + "\n\n" +  *//* emailIngreado); */

// -------- PROMPT 2

let peso = parseFloat(prompt("Ingrese su Peso:"));
let altura = parseFloat(prompt("Ingrese su Altura (CM)"))/100;
let imc = peso / (altura*altura);

alert("Tu IMC es: " + imc.toFixed(2) + "%");
