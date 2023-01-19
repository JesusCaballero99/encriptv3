const btnEncriptar = document.querySelector("#btn-encriptar");
const inputTexto = document.querySelector("#text-area");

function encriptarTexto(e){
    e.preventDefault();
    let texto = inputTexto.value;
    alert(texto);
    let longitud = (inputTexto.value).length;
    alert(longitud);
    
    for(let i=0;i<=longitud-1;i++){
        alert(texto[i]);
    }

    

}

btnEncriptar.onclick = encriptarTexto;