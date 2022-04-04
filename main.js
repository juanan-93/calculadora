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
        }
        else{
            pantalla.value += numero.value;
        }     
    })    
});


sumar.addEventListener("click", () =>{

    if(!pantalla.value.includes(sumar.value)){
        pantalla.value += sumar.value;
    }else{
        pantalla.value = eval(pantalla.value);
    }
});

multiplicar.addEventListener("click", () =>{
    if(!pantalla.value.includes(multiplicar.value)){
        pantalla.value += multiplicar.value;
    }else{
        pantalla.value = eval(pantalla.value);
    }
})    

restar.addEventListener("click", () =>{
    if(!pantalla.value.includes(restar.value)){
        pantalla.value += restar.value;
    }else{
        pantalla.value = eval(pantalla.value);
    }
})    

dividir.addEventListener("click", () =>{
    if(!pantalla.value.includes(dividir.value)){
        pantalla.value += dividir.value;
    }else{
        pantalla.value = eval(pantalla.value);
    }
})    

punto.addEventListener("click", () =>{

    if(pantalla.value.split(".").length == 1){
        pantalla.value += punto.value;
    }else if(pantalla.value.split(".").length == 2 && pantalla.value.includes('+')){
        pantalla.value += punto.value;
    }else if(pantalla.value.split(".").length == 2 && pantalla.value.includes('-')){
        pantalla.value += punto.value;
    }else if(pantalla.value.split(".").length == 2 && pantalla.value.includes('*')){
        pantalla.value += punto.value;
    }else if(pantalla.value.split(".").length == 2 && pantalla.value.includes('/')){
        pantalla.value += punto.value;
    }
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
