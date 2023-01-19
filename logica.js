const btnEncriptar = document.querySelector("#btn-encriptar");
const inputTexto = document.querySelector("#text-area");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copiar");
const mensaje = document.querySelector("#mensaje");


function encriptarTexto(e){
    e.preventDefault();
    let texto = inputTexto.value;
    let textocifrado=texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    mensaje.value = textocifrado;
    
    mensaje.focus();

}

function desencriptarTexto(e){
    e.preventDefault();
    let texto = inputTexto.value;
    let textodescifrado = texto.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi, "u");
    mensaje.value = textodescifrado;

    mensaje.focus();
    
}

function copiarTexto(){
  
    mensaje.select();
    document.execCommand("copy");
    

    alert("texto copiado en el portapapeles");
}

btnEncriptar.onclick = encriptarTexto;
btnDesencriptar.onclick = desencriptarTexto;
btnCopiar.onclick = copiarTexto;