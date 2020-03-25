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

setTimeout(function(p1, p2, p3){
    alert(p1);
    alert(p2);
    alert(p3);
}, 3000, 'argumento 1', 'argumento 2', 'argumento 3');