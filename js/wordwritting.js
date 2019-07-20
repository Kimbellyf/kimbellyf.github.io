/* colocando frase para escrever na intro */

function typeWriter(elemento) {
     const textoArray = elemento.innerHTML.split('');
     elemento.innerHTML = '';
     for(let i = 0; i < textoArray.length; i++) {
       setTimeout(() => elemento.innerHTML += textoArray[i], 100 * i);
     }
   }

  const restofraseintro = document.querySelector("#restopaddnotitulomaquina");
  typeWriter(restofraseintro);