
// Necesitamos crear una funcion que nos permita identificar si un estudiante aprobo una materia,
// para esto la funcion debe recibir el nombre completo del estudiante y el nombre de la materia
// como parametros, debe retornar "true" si aprobo la materia o "false" si la reprobo. Nota: Cada 
// estudiante tiene varias calificaciones en cada materia, para determinar si paso la materia, el promedio 
// de las calificaciones debe ser superior a 3.

const studentsDB = require("./students_db.json");
const universitiesDB = require("./universities_db.json");
const gradesDB = require("./grades_db.json");

function sacarNombre(idEstudiante) {
  let nombreCompleto = "";
  for (let i = 0; i < studentsDB.length; i++) {
    if (studentsDB[i].userId === idEstudiante) {
      nombreCompleto += `${studentsDB[i].firstName} ${studentsDB[i].lastName}`;
    }
  }
  return nombreCompleto;
}
console.log(sacarNombre("8cc2667d-85eb-401b-bc0f-7293d4808ed3"));

function check(nombreEstudiante, nombreMateria){
    let fullName =sacarNombre();
    let promedioMateria;
    for (let i =0; i <studentsDB.length; i ++){
        if(sacarNombre === nombreEstudiante && nombreMateria === subject){
            for (let j=0; j <gradesDB.length;j++){
                promedioMateria += gradesDB[j].grade;
                if (promedioMateria >3){
                    return true;
                }
            }
        }
    }
    return false;
}
console.log (check("Oscar Téllez, Ilustración"));
