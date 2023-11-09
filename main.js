function TocaSom (idElementoAudio) {
document.querySelector(idElementoAudio).play();  
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < ListaDeTeclas.length) {

const tecla = ListaDeTeclas(contador);

const instrumento = tecla.classList[1];

const idAudio = `#som_${intrumento}`;

console.log(idAudio); 

tecla[contador].onclick = function () {
    TocaSom('#som_tecla_pom');
}

contador = contador + 1;

console.log(contador);
}