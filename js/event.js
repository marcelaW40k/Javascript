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