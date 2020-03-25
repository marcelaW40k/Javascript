const title = document.getElementById("title");
title.innerHTML= 'Cursos';

const description = document.getElementById('description');
description.textContent= 'Listado de Cursos';
description.innerHTML= '<strong>' + description.textContent +'</strong>';

//const item = document.getElementsByTagName('li');

const items = document.querySelectorAll('li:nth-child(even)');
for(var i = 0; i < items.length; i++){
    
    let element = items[i];
    element.style.background = '#F2F2F2';
   
}

const element = document.querySelector('div.row > il.list-group > li');
const list = document.querySelector('ul');

console.log(list.childElementCount);
console.log(list.children[2]);

console.log(list.firstElementChild.innerHTML);
console.log(list.lastElementChild.innerHTML);
