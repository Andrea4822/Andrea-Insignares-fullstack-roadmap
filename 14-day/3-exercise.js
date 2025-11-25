let stringAutomatico="nombre";
let stringModificado=("Py"+ stringAutomatico);
let resultado;

if (stringAutomatico[0] === "P" && stringAutomatico[1] === "y") {
   resultado=stringAutomatico;
} else {
   resultado= stringModificado;
}
console.log(resultado);