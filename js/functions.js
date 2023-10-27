// alert("function activo");
//#################### tipo de varibles//
// const (valores constantes)
const pi = 3.1415;
const pul = 2.54;
// var (para variables globales)
var days = 10;
var name = "Alfredo Gutierrez";
// let (variables de bloque o locales)
let count = 1;

//################# formas de impresion//
// alert
// alert(name);
// console.log
console.log(name);
// body - pantalla
document.write(name + "###Wilder Duarte")
document.getElementById("box_one").innerHTML= "<h1>Wilder Duarte</h1>";
document.getElementById("box_two").innerText= "<h1>Wilder Duarte</h1>";
// librerias
// Swal.fire(
//     'The Internet?',
//     'That thing is still around?',
//     'question'
//   )
// Swal.fire({
//     icon: 'error',
//     ShowConfirmButton: false,
//     title:name,
//     text: name,
//     footer: "footer: " + name,
//     background: 'green',
//     position:'top-start' 
// });

//##################tipos de datos
//numericos
var number_one=20;
var number_two=5.5;
// texto
var class_type= "Electiva Tecnica 1";
// booleanos
 var boolean = true; //false
//  arrays - vectores
var array_num=[1,2,3,45,3.4,1.2];
var array_text=["lunes", "Martes", "Miercoles", "jueves", "Viernes", "Sabado", "Domingo"];
var array_mix=[1, "a",2, "c"]
var array_mul=[
    {name:"Alfredo", last_name:"Gutierrez", age:"23"},
    {name:"Alfredo", last_name:"Gutierrez", age:"3"},
    {name:"Alfredo", last_name:"Gutierrez", age:"43"},
    {name:"Alfredo", last_name:"Gutierrez", age:"73"}
]

//#################### operadores basicos
// suma
var suma= number_one + number_two;
console.log("Suma = " +suma);
// resta
var resta= number_one - number_two;
console.log("Resta = " +resta);
// multiplicacion 
var multi= number_one * number_two;
console.log("Multiplicacion = " +multi)
// Division 
var divi= number_one / number_two;
console.log("Division = " +divi.toFixed(2));
// Modulo 
var modulo= number_one % number_two;
console.log("Modulo = " +modulo);