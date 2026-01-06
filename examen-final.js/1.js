// Necesitamos encontrar todos los estudiantes de Mosquera que estudien en la Universidad Nacional.

const studentsDB = require("./students_db.json");
const universitiesDB = require("./universities_db.json");
const gradesDB = require("./grades_db.json");

function check() {
  let estudiantesEncontrados = [];
  for (let i = 0; i < studentsDB.length; i++) {
    let estudiantes = studentsDB[i];
    if (estudiantes.originCity === "Mosquera") {
      for (let j = 0; j < universitiesDB.length; j++) {
        let universidades = universitiesDB[j];
        if (
          universidades.code === estudiantes.universityCode &&
          universidades.universityName === "Universidad Nacional"
        ) {
          estudiantesEncontrados.push({
            nombre: estudiantes.firstName + " " + estudiantes.lastName,
            ciudad: estudiantes.originCity,
          });
          break;
        }
      }
    }
  }
  return estudiantesEncontrados
}
console.log(check())

