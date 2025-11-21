function recorrerString(texto){
    for (let i = 0; i < texto.length; i++) {
        console.log(texto[i]);
    }
}

function colocarlePuntos(texto){
    if (texto.length > 30) {
        return texto.slice(0, 30) + "...";
    } else {
        return texto;
    }
}

let esteTexto = " ajajajajjajajajsjsjkdkfkkekkeuyayyayy";
console.log(colocarlePuntos(esteTexto));

// andrea insignares