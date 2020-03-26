document.addEventListener('DOMContentLoaded', function(){
    alert('DOM ya fue construido');
    const title = document.getElementById("title");
title.innerHTML= 'Cursos';

const description = document.getElementById('description');
description.textContent= 'Listado de Cursos';
description.innerHTML= '<strong>' + description.textContent +'</strong>';

const button = document.querySelector('.btn.btn-primary');

button.addEventListener('click', function(e){

    if (title.style.display != 'none'){
        title.style.display = 'none';
        description.style.display = 'none';
       // button.textContent = 'Mostrar';
       //e.target.textContent = 'Mostrar'; se recomienda esta!
       this.textContent = 'Mostrar';
    }
    else{
        title.style.display = 'block';
        description.style.display  = 'block';
        //button.textContent = 'Ocultar';
        //e.target.textContent = 'Ocultar';
        this.textContent = 'Mostar';

    }
});

button.addEventListener('mouseenter', function(){
    this.className = 'btn btn-danger';
})

button.addEventListener('mouseout', function(){
    this.className = 'btn btn-primary';
})

//*setTimeout(function(p1, p2, p3){
    //alert(p1);
    //alert(p2);
  //  alert(p3);
//}, 3000, 'argumento 1', 'argumento 2', 'argumento 3');

//////Event del teclado/////
//const input = document.getElementById('input');

//input.addEventListener('keydown', function(e){
  //  alert('Tecla presionada: ' + e.key + 'con un codigo ' + e.keyCode);
//})

//*****Event Submit****** */

const form = document.getElementById('create-course');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let title = document.getElementById('title-form').value;
    let description = document.getElementById('description-form').value;

    alert(title);
    alert(description);

});

const checkbox = document.getElementById('checkbox');
let title_form = document.getElementById('title-form');

title_form .addEventListener('change', function(){

    alert('cambio de valor!')
})
});

for (let element of document.querySelectorAll('*')){
    element.addEventListener('click', show_messages);
}

function show_messages(e){
    console.log("Elemento actual: " + this.tagName);
    console.log("Elemento que disparo el evento: " + e.target.tagName);
    console.log("\n");
}