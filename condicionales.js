/*
//Ejercicio en clase 1 Membresia

let membresia = prompt("Cuentas con membresia activa").toUpperCase();
if(membresia === "SI"){
    console.log("Excelente puedes pasar")
}else{
    console.log("No tienes tu membresia activa")
}

//Ejercicio en clase 2 Pelicula Preferida

let pelicula = prompt("¿Cuál es tu pelicula prefereida de Tim burton?").toLowerCase();

if (pelicula === "BeetleJuice"){
    console.log("dilo tres veces y aparecera")
} else if(pelicula === "Gran Pez"){
    console.log("Algunos peces no se dejan pescar")
} else if(pelicula === "El cadaver de la novia"){
    console.log("Se puede romper un corazón que ha dejado de latir")
} else if( pelicula === "Sombras Tenebrosas"){
    console.log("¡Toda familia tiene sus demonios!")
} else if( pelicula === "Miss Peregrine y los niños peculiares"){
    console.log("¡Toda familia tiene sus demonios!")
}else{
    console.log("Lo siento, no es una pelicula de Tim Burton")
}

//Ejercicio en clase 3 Mayoria de edad

let edad = prompt("¿Cuál es tu edad?")

if(edad >= 18){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}

//Ejercicio en clase 4 Cambio de Precio

console.log("----------------------------------")
console.log("Bienvenido a tu puesto de Torta Preferido")
console.log("Torta de Queso $45 - Torta de Jamon $50")

let torta = prompt("¿Que torta quieres?").toLowerCase();

if(torta == "queso"){
    precio = 45
    let aguacate = prompt("¿Desea aguacate por $8 mas? s/n")
    if(aguacate == "s"){
        precio = precio +8;
    }
}else if(torta == "jamon"){
    precio = 50;
    let quesoextra = prompt("¿Desea queso extra por $15 mas? s/n")
    if(quesoextra == "s")
        precio +=15;
}else{
    console.log("Perdon tu opcion no esta en el menu")
}
console.log("El precio total es $" + precio);
*/

//Ejercicio 1 Belleza

let belleza = prompt("¿Eres bellisimo/a?").toUpperCase();
if(belleza === "SI"){
    console.log("Ciertamente")
}else{
    console.log("No te creo")
}

// Ejercicio 2 Divisible entre 2

let numero = prompt("escribe un número") 
if (numero % 2 === 0){
    console.log("Es divsible por 2")
}else{
    console.log("No es divisible por 2")
}

// Ejercicio 3 Número Par o Impar

let numeros = prompt("Introduce un número entero");

let resultado = parImpar (numeros);
alert("El número" +numeros+ "es" + resultado);

function parImpar(numeros){
    if(numeros % 2 == 0){
        return "par";
    }else{
        return "impar";
    }
}

// Ejercicio 4 Premio

let numeroCliente = prompt("Ingrese un número para el sorteo");


numeroCliente = Number(numeroCliente);

if (numeroCliente === 1000) {
  console.log("¡Ganaste un premio!");
} else {
  console.log("Lo sentimos, sigue participando. Tu número es:", numeroCliente);
}

// Ejercicio 5 Número menor que 

let numero1 = prompt("Ingrese el primer número:");
let numero2 = prompt("Ingrese el segundo número:");

numero1 = Number(numero1);
numero2 = Number(numero2);

if (numero1 < numero2) {
  console.log("El número menor es:", numero1);
} else {
  console.log("El número menor es:", numero2);
}

// Ejercicio 6 Número mayor que

let numeros1 = Number(prompt("Ingrese el primer número:"));
let numeros2 = Number(prompt("Ingrese el segundo número:"));
let numeros3 = Number(prompt("Ingrese el tercer número:"));   

let mayor = numeros1; 

if (numeros2 > mayor) {
  mayor = numeros2;
}

if (numeros3 > mayor) {
  mayor = numeros3;
}

console.log("El número mayor es:", mayor);

//Ejercicio 7 días de la semana 

let diadelasemana = prompt("Escribe un un dia de la semana").toLowerCase();

if (diadelasemana === "lunes"){
    console.log("Ten un gran inicio de semana")
} else if(diadelasemana === "martes"){
    console.log("Ya casi Miercoles")
} else if(diadelasemana === "miercoles"){
    console.log("Ombligo de semana")
} else if( diadelasemana === "jueves"){
    console.log("Juebebes")
} else if( diadelasemana === "viernes"){
    console.log("¡YEI! Ya es Viernes!!")
}else{
    console.log("Bonito fin de semana, pasala increible")
}

//Ejercicio 8 Calificaciones

let calificacion = prompt("¿Cuál es tu calificación?")


if(calificacion <=6){
    console.log("Reprobado")
}else if(calificacion >= 6 && calificacion <=8){
    console.log("Regular")
}else if(calificacion == 9){
    console.log("Bien")
}else if(calificacion == 10){
    console.log("Excelente")
}else{
    console.log("Hay un error")
}

// Ejercicio 9 Comprar un helado 

function calcularPrecioHelado() {
    let precioHelado = 50; 
    let topping = prompt("¿Qué topping deseas para tu helado? (oreo, kitkat, brownie o ninguno):").toLowerCase();
  
    switch (topping) {
      case "oreo":
        return precioHelado + 10;
      case "kitkat":
        return precioHelado + 15;
      case "brownie":
        return precioHelado + 20;
      case "ninguno":
        return precioHelado;
      default:
        console.log("No tenemos este topping, lo sentimos.");
        return precioHelado;
    }
  }
  const precioFinal = calcularPrecioHelado();
  console.log("El precio total de tu helado es:", precioFinal, "MXN");

//Ejercicio 10
function calcularCosto() {
    let precioBase = {
      course: 4999,
      carrera: 3999,
      master: 2999
    };
    let descuentoBeca = {
      facebook: 0.2, // 20%
      google: 0.15, // 15%
      jesua: 0.5 // 50%
    };
    let duracion = {
      course: 2,
      carrera: 6,
      master: 12
    };
  
    let nivel = prompt("¿Qué nivel deseas? (course, carrera, master):").toLowerCase();
    let beca = prompt("¿Tienes alguna beca? (facebook, google, jesua o ninguna):").toLowerCase();
  
   
    if (!Object.keys(precioBase).includes(nivel)) {
      console.log("Nivel no válido.");
      return;
    }
  
    let precioMensual = precioBase[nivel];
    let descuento = 0;
  
    if (beca in descuentoBeca) {
      descuento = descuentoBeca[beca];
      precioMensual *= (1 - descuento);
    }
  
    let duracionMeses = duracion[nivel];
    let precioTotal = precioMensual * duracionMeses;
  
    console.log(`El costo mensual con descuento es de: $${precioMensual.toFixed(2)} MXN`);
    console.log(`El costo total del programa es de: $${precioTotal.toFixed(2)} MXN`);
  }
  
  calcularCosto();

//Ejercicio 11 
console.log("----------------------------------")

let vehiculo = prompt("¿Que vehiculo deseas usar? coche - moto - autobus ").toLowerCase();

if(vehiculo == "coche"){
    precio = 0.20
    let kilometro = prompt("¿Cuantos kilometros recorriste?")
    if("litrosconsumidos >= 0 && litrosconsumidos <=100"){
        precio = precio * kilometro + 5;
    if("litrosconsumidos > 100")
        precio = precio * kilometro + 10;
    }
}else if(vehiculo  == "moto"){
    precio = 0.10;
    let kilometro = prompt("¿Cuantos kilometros recorriste?")
    if("litrosconsumidos >= 0 && litrosconsumidos <=100"){
        precio = precio * kilometro + 5;
    if("litrosconsumidos > 100")
        precio = precio * kilometro + 10;
    }
}else if(vehiculo  == "autobus"){
    precio = 0.5;
    let kilometro = prompt("¿Cuantos kilometros recorriste?")
    if("litrosconsumidos >= 0 && litrosconsumidos <=100"){
        precio = precio * kilometro + 5;
    if("litrosconsumidos > 100")
        precio = precio * kilometro + 10;
    }
}else{
    console.log("No contamos con este auto")
}
console.log("El precio total es $" + precio);