let persona = {
  nombre: "Ana",
  edad: 17,
  "mi bombo": 10,
  null: 10,
  undefined: 10,
}
console.log("null" in persona)
persona.colorDeOjos = "azul"
console.log(persona["mi bombo"])
delete persona.colorDeOjos
console.log(persona);
for (let key in persona) {
  console.log(persona[key])
}
// spread operator = operdor para desempaquetar
const personasReportadasEnDatacredito = ["laura", "valeria", "daniela", "catalina"]
let [persona1, ,persona2, persona3] = personasReportadasEnDatacredito
console.log(persona3)
let [,,,,primeraLetra, segundaLetra, terceraLetra] = "abcdefg"; // a = "a", b = "b", c = "c"
console.log(primeraLetra)
let user = {};
[user.name, ,user.surname] = "John Smith Perez".split(" ");
console.log(user)
let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
console.log(rest.join(" "))
let [names = "Guest", surname = "Anonymous"] = ["Julius"];
console.log(names)
let options = { width: 100, height: 200 };
let { width: w, height: h } = options; // w = 100, h = 200
let options2 = {height: 300}
let { width, height = 200 } = options2;
console.log(height)
let { title, ...resto } = { title: "Menu", height: 200, width: 100 };
console.log(resto)
let options3 = {
  size: { width2: 100, height2: 200 },
  items: ["Cake", "Donut"]
};
let {
  size: { width2, height2 }, // Extrae width y height del objeto size
  items: [item1, item2],   // Extrae item1 y item2 del array items
  title2 = "Menu"           // Valor por defecto para una propiedad no existente
} = options3;
// width = 100, height = 200, item1 = "Cake", item2 = "Donut", title = "Menu"
console.log(options3)