const agregar = document.querySelector("#agregar");
const input = document.querySelector("#item");
const contenedor = document.querySelector("#contenedor");
const clear = document.querySelector("#limpiar")
let objectList = [];

//Función para agregar objetos al Array
agregar.addEventListener ("click", function() {
const inputValue = input.value;
const li = document.createElement("li");

//LocalStorage
let miStorage = window.localStorage;
console.log(localStorage.getItem("example"));

objectList.push(inputValue);
li.classList.add("list-group-item")
li.appendChild(document.createTextNode(inputValue));
contenedor.appendChild(li);
let arrayString = JSON.stringify(objectList);
localStorage.setItem("example", arrayString);

//Para borrar el valor del input después de darle "Agregar"
input.value = ("")
});

//Función para borrar objetos del array
clear.addEventListener ("click", function() {
objectList.splice(0, objectList.length);
const items = contenedor.querySelectorAll("li");
items.forEach(item => { item.remove(); });
});

//Meterle el Parse al Jorge
document.addEventListener("DOMContentLoaded", function() {
let jorgeString = JSON.parse(jorge)
console.log(JSON.parse(jorge))
var jorge = localStorage.getItem("example");
});