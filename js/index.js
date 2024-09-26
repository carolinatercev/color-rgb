//Recuperamos elementos id de los inputs.
const rojo=document.getElementById('rojo');
const verde=document.getElementById('verde');
const azul=document.getElementById('azul');

console.log(rojo.value);
console.log(verde.value);
console.log(azul.value);

//Recuperamos elementos p .
const textoRojo=document.querySelector('#textoRojo');
const textoVerde=document.querySelector('#textoVerde');
const textoAzul=document.querySelector('#textoAzul');

/****************   */
//Agrego contenido a los elementos p 
textoRojo.textContent = rojo.value;
textoVerde.textContent =verde.value;
textoAzul.textContent = azul.value; 

//valores de los elementos input
let colorRojo=rojo.value;
let colorVerde=verde.value;
let colorAzul=azul.value;


const actualizarColor=(rojo,verde,azul) =>{
    //function actualizarColor(){  tambien se puede hacer asi 
const colorRGB= `rgb(${rojo}, ${verde}, ${azul})`;
document.body.style.backgroundColor = colorRGB;
};
rojo.addEventListener("change",(ev) =>{
    colorRojo=ev.target.value;
    console.log(ev);
    textoRojo.textContent = colorRojo;
    actualizarColor(colorRojo,colorVerde,colorAzul);

})

verde.addEventListener("change",(ev) =>{
    colorVerde=ev.target.value;
    console.log(ev);
    textoVerde.textContent = colorVerde;
    actualizarColor(colorRojo,colorVerde,colorAzul);
});

azul.addEventListener("change",(ev) =>{
    colorAzul=ev.target.value;
    console.log(ev);
    textoAzul.textContent = colorAzul;
    actualizarColor(colorRojo,colorVerde,colorAzul);
});

//LOCAL STORAGE

let colorazul=localStorage.setItem("azul",colorAzul);
console.log(colorazul);
let colorrojo=localStorage.setItem("rojo",colorRojo);
console.log(colorrojo);
let colorverde=localStorage.setItem("verde",colorVerde);
console.log(colorverde);


