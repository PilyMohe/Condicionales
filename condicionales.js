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
//Ejercicio 1

let belleza = prompt("¿Eres bellisimo/a?").toUpperCase();
if(belleza === "SI"){
    console.log("Ciertamente")
}else{
    console.log("No te creo")
}

// Ejercicio 2

let edad = prompt("¿Cuál es tu edad?")

if(edad >= 18){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
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