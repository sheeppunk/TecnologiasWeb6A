# TecnologiasWeb6A
Primera practica en la materia de tecnologias web
Comprobar cual de los tres numero es mayor
08/05/2025
```typescript
(()=>{



const num1:number = 20;
const num2:number = 30;
const num3:number = 10;

let valor:String;

console.log("valor num1",num1)
console.log("valor num2",num2)
console.log("valor num3",num3)

function _hola(hola1:number,hola2:number){
    if(hola1 >= hola2){
        return hola1
    }else{
        return hola2
    }
}

let numtest:number = _hola(num1,num2)
let numf:number = _hola(numtest,num3)

if(num1==numf){
    console.log("valor mas alto num1:",num1);
}
if(num2==numf){
    console.log("valor mas alto num2:",num2);
}
if(num3==numf){
    console.log("valor mas alto num3:",num3);
}


})()
```
