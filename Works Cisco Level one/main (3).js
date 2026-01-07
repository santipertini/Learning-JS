let suma= 0;
let numeros = [2,3,4,5,6,7,8];
let promedio=0;

function sumar(){
    for(i=0;numeros.length>i;i++){
        suma+=numeros[i];
    }
}
function promediar(){
    promedio= suma/numeros.length;
}
sumar();
promediar();
console.log("La suma fue de: " + suma + "\n");
console.log("El promedio fue de: " + promedio);