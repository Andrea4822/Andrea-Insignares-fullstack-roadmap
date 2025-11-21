function estoEsPalindromo(palabra) {
    let palabraEnMiniscula = palabra.toLowerCase();
    let palabraAlReves = palabraEnMiniscula.split("").reverse().join("");

    return palabraEnMiniscula === palabraAlReves;
}

console.log(estoEsPalindromo("oso")); 
console.log(estoEsPalindromo("Banano")); 

// andrea insignares