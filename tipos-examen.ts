

type carro={
    carroceria:string;
    modelo:string;
    antibalas:boolean;
    pasajeros:number;
    disparar?:()=>void
}

let batimovil:carro={
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
}

const bumblebee:carro = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
}

type malos = {
    nombre:string;
    edad:number|undefined;
    mutante:boolean;
}[]

const villanos:malos = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}]

type m1={//charles
    poder:string;
    estatura:number;
}

type m2={//apocalipsis
    lider:boolean
    miembros:string[]
}

let charles:m1 = {
  poder:"psiquico",
  estatura: 1.78
};

let apocalipsis:m2 = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

let mystique:(m1|m2);
mystique = charles;
mystique = apocalipsis;

