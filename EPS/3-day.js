//Un proveedor internacional de medicamentos nos acaba de informar que hubo un error con un lote de pregabalina que
// suministramos en nuestros centros medicos, de nuestro sistema de informacion de inventario nos informan que ese lote
//  fue consumido en su totalidad durante el 2024, teniendo esta informacion crea un script que permita identificar que
// pacientes fueron medicados con pregabalina durante el 2024, rapidooo necesitamos contactar a estos usuarios (en el
//  resultado debe estar el correo de los usuarios para poder contactarlos)

const usuariosDB = require("./user-database.json");
const historiasClinicasDB = require("./medical-history.json");

/*function checking() {
  let consumidores=[];

  for (let j = 0; j < historiasClinicasDB.length; j++) {
    let historia = historiasClinicasDB[j];

    if (
      historiasClinicasDB[j].date.includes("2024") &&
      historiasClinicasDB[j].medicationsUsed.includes("Pregabalina")
    ) {
      for (let i = 0; i < usuariosDB.length; i++) {
        if (usuariosDB[i].userId === historia.userId) {
          consumidores.push({
            fullName: usuariosDB[i].firstName + " " + usuariosDB[i].lastName,
            correo: usuariosDB[i].email,
          });
          break;
        }
      }
    }
  }
  return consumidores;
}

console.log(checking());*/

//resulta que en medio de una reunion con nuestros medicos el doctor Alberto Martínez nos informo que
// un paciente se comunico con el para preguntarle acerca de unas indicaciones que el doctor le habia 
// dado en su cita de Alergología pero el doctor Alberto no da esa especialidad, eso solo quiere decir 
// que tenemos un impostor! realiza un script que nos permita identificar tanto a los pacientes que este 
// impostor halla atendido como a los hospitales en los que estuvo para poder realizar nuestro respectivo informe.


