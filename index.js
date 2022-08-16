import cipher from './cipher.js';

//aqui manipulas todo el dom

//ENCODE
 document.getElementById("botonEncriptar").addEventListener("click",deEncode);

 function deEncode () {
   let string=document.getElementById("ingTextoHtml").value.toUpperCase();
   let offset=Number(document.getElementById("Desplazamiento").value);
   // esta es una ejecucion
   let mostrarResultado=document.getElementById("resultadoCifrado");
   mostrarResultado.innerHTML=cipher.encode(offset, string);
   
}

//DECODE

document.getElementById("botonDesEncriptar").addEventListener("click",deDecode);
function deDecode () {
  let string=document.getElementById("ingTextDesC").value.toUpperCase();
  let offset=Number(document.getElementById("DesplazamientoDes").value);
  console.log(offset)
  let resultado=cipher.decode(offset, string);// esta es una ejecucion
   let mostrarResultado=document.getElementById("resultadoDesCifrado");
   mostrarResultado.innerHTML=resultado;
  
}



