function recorrerArrayTexto(arrayTexto) {
  for (let i = 0; i < arrayTexto.length; i++) {
    console.log(arrayTexto[i]);
  }
}
function contadorVocales(texto) {
  let conteoVocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase();

    if ("aeiou".includes(letra)) {
      conteoVocales[letra]++;
    }
  }
  console.log(conteoVocales);
}

recorrerArrayTexto("buenas tardes"); 
contadorVocales("buenas tarde");

// andrea insignares