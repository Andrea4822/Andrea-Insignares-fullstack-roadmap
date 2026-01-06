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

/*function checking(){
    let informe=[];
    for(let i =0; i <historiasClinicasDB.length;i++){
        if(historiasClinicasDB[i].doctor === "Dr. Alberto Martínez"){
            for(let j=0; j < usuariosDB.length;j ++){
                if(usuariosDB[j].userId === historiasClinicasDB[i].userId){
                    informe.push({
                        paciente: usuariosDB[j].firstName+ " " + usuariosDB[j].lastName,
                        hospital :historiasClinicasDB[i].hospitalName,
                    })
                     break;
                }
            }
        }

    }
    return informe;
}
console.log (checking());*/

//acabamos de ser demandados por la familia de un paciente que murio luego de una visita a uno de nuestros 
// centros medicos, resulta que en la investigacion sobre su muerte encontraron que en uno de nuestros 
// centros medicos le suministraron Warfarina y Meloxicam en una misma visita, esta combinacion puede ser 
// mortal porque no se debe combinar anticoagulantes con antiinflamatorios no esteroides, no tenemos una lista
//  de los medicamentos que usamos pero con la base de datos que tenemos podemos determinar cuales son los medicamentos
//  que utilizamos luego de que tengas esa lista de medicamentos investiga cuales de ahi son antiinflamatorios no esteroides
//  y luego de eso realiza un script que permita identificar a los doctores que suministraron Warfarina con alguno de esos
//  antiinflamatorios no esteroides, los hospitales que permitieron esto tambien tienen responsabilidad por lo tanto tambien
//  debemos obtener el nombre los hospitales donde sucedio esto y ademas el nombre de los usuarios para poder contactarlos y
//  llegar a una conciliacion con ellos antes de que se sumen a esta demanda.


