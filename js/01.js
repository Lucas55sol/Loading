/*
let array = [1,2,3,4];

let newarray = [...array,5];

console.log(newarray);

//output: [1,2,3,4,5]


let obj = {
    name : "Lucas",
    edad : 15,
}

let obj2 = {...obj, sexo:"Masculino"}

console.log(obj2);

//output:{name:"Lucas",edad:15,sexo:"Masculino"}


function sumar(n1,n2){
    return n1 + n2;
}

retornar = sumar(5,6);

console.log(retornar);

let total = 0;

function carritoCompra(precio){
        return total += precio;
}

function iva(total){
    return 1.15 * total;
}

total = carritoCompra(200);
total = carritoCompra(300);

console.log(total);

const totalAPagar = iva(total);

console.log(totalAPagar);

const mascotas = {
   nombre : "Luna",
   edad: 5,
   ladrar: function(ladrido){
       return ladrido;
   }
}

console.log(`Mi nombre es ${mascotas.nombre} y tengo ${mascotas.edad} y se decir ${mascotas.ladrar("guau guau")}`);
mascotas.ladrar("Guau Guau");

let nombre = "Luis";
let age = 18;

const persona = {
    nombre,
    age
}

console.log(`Hola mi nombre es ${nombre} y tengo ${age} años`);

const producto1 = {
   nombre : "Telefono Xiaomi9",
   precio : 120,
   color : ["Amarillo","blanco","Azul"],
}

const CarritoCompras = function(){
    producto1.color.forEach(element => {        
        console.log(`${producto1.nombre} $${producto1.precio} en color: ${element}`);
    });
}

CarritoCompras();


const arreglo=[1,3,5,7];

arreglo.forEach(function(element,index){
       console.log(`El elemento ${element} esta en la posicion ${index}`);
});

 output:
   El elemento 1 esta en la posicion 0
   El elemento 3 esta en la posicion 1
   El elemento 5 esta en la posicion 2
   El elemento 7 esta en la posicion 3


class producto{
     constructor(nombre,edad){
         this.nombre = nombre;
         this.edad = edad;
     }
     formatearProducto(){
         return `Mi nombre es ${this.nombre} y tengo ${this.edad} años`;
     }
}

const producto2 = new producto('Maria',18);
const producto3 = new producto('Juan',21);

console.log(producto2);
console.log(producto3);

function tienda(cosas,valor){
    this.cosas = cosas;
    this.valor = valor;
}

tienda.prototype.cobrar = function(){
    return `La ${this.cosas} tiene un valor de ${this.valor} centavos`;
}

const cosa1 = new tienda('Manzana',50);

console.log(cosa1);
console.log(cosa1.cobrar());

const auth = new Promise((resolve,reject)=>{
    const user = false;

    if(user){
        resolve('Usuario registrado');
    }else{
        reject('Usuario no registrado');
    }
});

auth
.then((resultado)=>{
         console.log(resultado);
})
.catch((error)=>{
   console.log(error);
})
*/
/*
const boton = document.querySelector('#btn');

boton.addEventListener('click', ()=>{
   Notification.requestPermission()
   .then((resultado)=>{
    console.log(`El resultado es ${resultado}`);
   });
});

if(Notification.permission == 'granted'){
    new Notification('Esta es una notificacion'),{
        icon:'img/sol.jpg',
        body: 'Bienvevidos a mi web'
    }
}

function clientes(){
    return new Promise(resolve =>{
        console.log('Descargando clientes... espere');
 
        setTimeout(()=>{
           resolve('Los clientes fueron descargados');
        },5000)

    });
}

async function app(){
    try {
        const resultado = await clientes();
        console.log(resultado)
    } catch (error) {
        console.log(error);
    }
}

app();
*/
/*
function empleado(){

    let archivo = 'js/empleados.json';
    
    fetch(archivo)
        .then((resultado)=>{
            return resultado.json();
        })
        .then(datos => {
            
            const {empleados} = datos;

            console.log(empleados)

           empleados.forEach(element => {
               console.log(element.nombre);
           });
        })
}

empleado();
 
*/
/*
async function empleado(){
    let archivo = 'js/empleados.json';
    const api = await fetch(archivo);
    const datos = await api.json();
    console.log(datos);
    const {empleados} = datos;

    empleados.forEach(element => {
        console.log(element.nombre + " -> " + element.puesto);
    });
}

empleado();
*/
/*
function cargar(){

fetch('./img/sol.jpg')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.blob();
})
.then(myBlob => {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});
}

cargar();
*/

