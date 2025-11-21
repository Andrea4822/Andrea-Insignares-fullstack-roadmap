function convertidorPalabras(texto){
    let  palabras = texto.split(" ");
    let resultado = [];
    for (let i = 0; i <palabras.length;i++){
        let primeraLetraPalabra= palabras[i][0].toUpperCase();
        let palabraEscrita= palabras[i];
        let restoPalabra = palabraEscrita.slice(1);
        let palabraConvertida = primeraLetraPalabra + restoPalabra;

        resultado.push(palabraConvertida);
       
    }
        console.log(resultado.join(" "));

}
convertidorPalabras("Buenas tardes");

// andrea insignares
