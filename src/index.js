import cipher from './cipher.js';

const codificar = () => {
    let message = document.getElementById("cifrado").value;
    let offset = document.getElementById("numero").value;
    let mensaje = cipher.encode(offset, message);
    document.getElementById("cifrado").value = mensaje; 
}

document.getElementById("codificar").onclick = function() {
    codificar();
}

const decodificar = () => {
    let messagetwo = document.getElementById("descifrado").value;
    let offsettwo = document.getElementById("numero2").value;
    let mensajedeco = cipher.decode(offsettwo, messagetwo);
    document.getElementById("descifrado").value = mensajedeco;
    
}

document.getElementById("decodificar").onclick = function() {
    decodificar();
}