let teclado = document.getElementById("Teclado");
let pantalla = document.getElementById("pantalla");
let numeros = document.querySelectorAll(".numero");
let multiplicar = document.getElementById("multiplicar");
let dividir = document.getElementById("dividir");
let sumar = document.getElementById("sumar");
let porcentaje = document.getElementById("porcentaje");
let ac = document.getElementById("ac");
let igual = document.getElementById("igual");
let punto = document.getElementById("punto");
let borrar = document.getElementById("borrar");



numeros.forEach(numero => {

    numero.addEventListener("click", () =>{

        if(pantalla.value == 0 && numero.value == 0 ){
            pantalla.value = "0";
        }else if(pantalla.value == 0 && numero.value != 0){
            pantalla.value = numero.value;
        }else{
            pantalla.value += numero.value;
        }
    })    
});

sumar.addEventListener("click", () =>{
    pantalla.value += sumar.value
})

multiplicar.addEventListener("click", () =>{
    pantalla.value += multiplicar.value
})    

restar.addEventListener("click", () =>{
    pantalla.value += restar.value
})    

dividir.addEventListener("click", () =>{
    pantalla.value += dividir.value
})    

punto.addEventListener("click", () =>{
    pantalla.value += punto.value
})    

igual.addEventListener("click", () => {
    pantalla.value = eval(pantalla.value);
});

borrar.addEventListener("click", () =>{
    pantalla.value = "0";
});

ac.addEventListener("click", () =>{
    pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1);
});
