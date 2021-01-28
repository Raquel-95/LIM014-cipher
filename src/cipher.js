const cipher = {
  encode: function(offset,input)  {
    
    if(offset === undefined || input === undefined) {
      throw new TypeError("invoked with wrong argument types ...");
    }
    else if(offset == 0 && input == undefined){
      throw new TypeError("invoked with wrong argument types (0)");
    }

    else if(offset === null && Array.isArray(input)){
      throw new TypeError("invoked with wrong argument types (null, [])");
    }

    else if(offset == 0 && input == 0){
      throw new TypeError("invoked with wrong argument types 0, 0");
    }

    let palabra_codificada= ''; // cree variable para guardar el resultado
    //Cree un bucle con for, con los limites de inicio, final e incremento.
    
    for (let i = 0; i < input.length; i++) {
     
      const ascii_original = input.charCodeAt(i); 
      if(ascii_original>=65 && ascii_original <=90 || ascii_original>=97 && ascii_original<=122){
        
        const ascii_desplazado = (ascii_original - 65 + offset) %26 + 65;
        const letra_codificada = String.fromCharCode(ascii_desplazado);

        palabra_codificada += letra_codificada; // para concatenar todas las letras.
      }
      else {
        palabra_codificada += input.charAt(i);
      }
      
    }
  
    return palabra_codificada; // return para retornar/devolver 
  },

  decode: function(offset,input)  {
    if(offset === undefined || input === undefined) {
      throw new TypeError("invoked with wrong argument types ...");
    }
    
    if(offset == 0 && input == undefined){
      throw new TypeError("invoked with wrong argument types (0)");
    }

    if(offset === null && Array.isArray(input)){
      throw new TypeError("invoked with wrong argument types (null, [])");
    }

    if(offset == 0 && input == 0){
      throw new TypeError("invoked with wrong argument types 0, 0");
    }

    let palabra_decodificada= ''; 
  
    for (let i = 0; i < input.length; i++) {
    
      const ascii_original = input.charCodeAt(i);

      if(ascii_original>=65 && ascii_original <=90 || ascii_original>=97 && ascii_original<=122) {

      const ascii_desplazado = (ascii_original + 65 - offset) %26 + 65;
      const letra_decodificada = String.fromCharCode(ascii_desplazado);
  
      palabra_decodificada += letra_decodificada;
      }
      else {
        palabra_decodificada += input.charAt(i);
      }
    }
  
    return palabra_decodificada;
  }
  
}

//Dentro del objeto cipher creo una función llamada encode, que tiene parametros o variables llamadas offset e input.


export default cipher;
