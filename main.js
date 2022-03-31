let teclado = document.getElementById("Teclado");
let pantalla = document.getElementById("pantalla");
let numeros = document.querySelectorAll(".numero");
let multiplicar = document.getElementById("multiplicar");
let dividir = document.getElementById("dividir");
let sumar = document.getElementById("sumar");
let porcentaje = document.getElementById("porcentaje");
let ac = document.getElementById("ac");
let igual = document.getElementById("igual");
let ans = document.getElementById("ans");
let borrar = document.getElementById("borrar");


numeros.forEach(numero => {
    numero.addEventListener("click", () =>{
        pantalla.value += numero.value
    })    
});

sumar.addEventListener("click", () =>{
    pantalla.value += sumar.value
})    

restar.addEventListener("click", () =>{
    pantalla.value += restar.value
})    

dividir.addEventListener("click", () =>{
    pantalla.value += dividir.value
})    

porcentaje.addEventListener("click", () =>{
    pantalla.value += porcentaje.value
})    

borrar.addEventListener("click", () =>{
    pantalla.value.remove()});

