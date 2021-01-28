import cipher from './cipher.js';

const code = document.getElementById('btn_code'); //Para llamar al al boton code. 
code.addEventListener('click', () => { // para agregar/asignar un evento. Escuchar.
    const offset = document.getElementById('input_offset').value; // para obtener el offset, traer el valor y meterlo en una constante
    const input = document.getElementById('text_input').value; // 
    const output = document.getElementById('text_output'); // para acceder a la caja...

    const offset_numero = parseInt(offset);
    
    const texto_codificado = cipher.encode(offset_numero, input); 
    output.value = texto_codificado;
});

const decode = document.getElementById('btn_decode'); //Para llamar al al boton decode. 
decode.addEventListener('click', () => { // para agregar/asignar un evento. Escuchar.
    const offset = document.getElementById('input_offset').value; // para obtener el offset, traer el valor y meterlo en una constante
    const input = document.getElementById('text_input').value; // 
    const output = document.getElementById('text_output'); // para acceder a la caja

    const offset_numero = parseInt(offset);
    
    const texto_decodificado = cipher.decode(offset_numero, input); 
    output.value = texto_decodificado;
});

const borrar = document.getElementById('borrar'); 
borrar.addEventListener('click', () => {
    document.getElementById('input_offset').value = '';
    document.getElementById('text_input').value = '';
    document.getElementById('text_output').value = '';
});


const presentacion = document.getElementById('present');
presentacion.addEventListener('mouseenter', () => {
    presentacion.innerHTML = "BIENVENIDO <br/><br/> AL SISTEMA DE MENSAJERIA SECRETA <br/><br/> DE LAS FUERZAS ARMADAS DEL PERU";
});

presentacion.addEventListener("mouseleave", () => {
    presentacion.innerHTML = "CJFOWFOJEP<br/><br/> BM TJTUFNB EF NFOTBKFSJB TFDSFUB <br/><br/>EF MBT GVFSABT BSNBEBT EFM QFSV"
});
//const copiar = document.getElementById('copiar'); 
//copiar.addEventListener('click', () => {

   // const output = document.getElementById('text_output');
   // output.select();
   // document.execCommand('copy');

//});



//function copiarAlPortapapeles(text_output) {
   // var aux = document.createElement("output");
  //  aux.setAttribute("value", document.getElementById(text_output).innerHTML);
   // document.body.appendChild(aux);
  //  aux.select();
   // document.execCommand("copy");
 // document.body.removeChild(aux);
  //}

/*console.log(cipher);
console.log(typeof cipher);
console.log(typeof "Raquel");
console.log(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
console.log(cipher.decode(5, 'DEF'));
console.log(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG'));*/


