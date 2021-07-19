const cipher = {
  encode:(offset,string) =>{ 
    if(offset==null) {
      throw TypeError ("no olvide indicar el desplazamiento");    
    }
               
    let stringCifrado="";  
    //Ciclo for se requiere para iterar por cada letra que reciba del mensaje, length devuelve el numero de elementos de (caracteres del msj)
    for (let i = 0; i < string.length; i++) {      
      // charCodeAt elemento que devuelve el numero ASCCI del arreglo dado (c/U letra)
      //se asigna el valor del charCodeAt 
      const textaCifrarAsci=string.charCodeAt(i);
      //DESPLAZAMIENTO
      //se genera una variable para hacer el desplazamiento con la formula del cifrado Cesar.
      // implementar la formula
      if (textaCifrarAsci>=65 && textaCifrarAsci<=90) {
        stringCifrado+=String.fromCharCode((textaCifrarAsci - 65 + offset)%26 + 65);
      }else {
        stringCifrado += string[i];        
      }      
    }
    return stringCifrado
  },      
  
   //aqui funcion decode
   
  decode:(offset,string) =>{
    if(offset==null) {
      throw TypeError ("no olvide indicar el desplazamiento");    
    }

    let stringCifrado="";  
    //Ciclo for se requiere para iterar por cada letra que reciba del mensaje, length devuelve el numero de elementos de (caracteres del msj)
    for (let i = 0; i < string.length; i++) {      
      // charCodeAt elemento que devuelve el numero ASCCI del arreglo dado (c/U letra)
      //se asigna el valor del charCodeAt 
      const textaCifrarAsci=string.charCodeAt(i);
      //DESPLAZAMIENTO
      //se genera una variable para hacer el desplazamiento con la formula del cifrado Cesar.
      // implementar la formula
      if (textaCifrarAsci>=65 && textaCifrarAsci<=90) {
        stringCifrado+=String.fromCharCode((textaCifrarAsci - 90 - offset)%26 + 90);
      }else {
        stringCifrado += string[i];        
      }      
    }
    return stringCifrado   
  },   
}
export default cipher;


//OA para aprender:
//objetos 
//funciones
// parametros