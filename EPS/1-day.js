//necesitamos crear una funcion que nos de la informacion de un servicio dado, para esto crea una funcion
//llamada serviceData que reciba por parametro el id del servicio y retorne el objeto de ese servicio
//en nuestra base de datos.

const usuariosDB = require("./user-database.json");
const historiasClinicasDB = require("./medical-history.json");

/*function serviceData(idServicio) {
  let servicio = {
    serviceId: "",
    userId: "",
    date: "",
    hospitalName: "",
    medicalNotes: "",
    doctor: "",
    speciality: "",
    medicationsUsed: "",
  };
  for (let i = 0; i < historiasClinicasDB.length; i++) {
    if (historiasClinicasDB[i].serviceId === idServicio) {
      servicio.serviceId = historiasClinicasDB[i].serviceId;
      servicio.userId = historiasClinicasDB[i].userId;
      servicio.date = historiasClinicasDB[i].date;
      servicio.hospitalName = historiasClinicasDB[i].hospitalName;
      servicio.medicalNotes = historiasClinicasDB[i].medicalNotes;
      servicio.doctor = historiasClinicasDB[i].doctor;
      servicio.speciality = historiasClinicasDB[i].speciality;
      servicio.medicationsUsed = historiasClinicasDB[i].medicationsUsed;
    }
  }
  return servicio;
}

console.log(serviceData("srv_0002"));*/

//necesitamos un resumen sobre los servicios que a usado un paciente, para esto crea una funcion
//llamada userServicesResume, que reciba como parametro el nombre de un usuario de nuestra base de datos.
//la funcion debe retornar el siguiente informe:
//{ userId: "", firstName: "", lastName: "", totalMedicalAppointments: 1302, }

/*function userServicesResume(nombreUsuario){
  nombreUsuario = nombreUsuario.split(" ")
    let informe={
        userId:"",
        firstName:"",
        lastName:"",
        totalMedicalAppointments:0,
    };

    for(let i= 0; i <usuariosDB.length;i++){
        if(usuariosDB[i].firstName == nombreUsuario[0] && usuariosDB[i].lastName == nombreUsuario[1]){
          informe.firstName=usuariosDB[i].firstName;
        informe.lastName=usuariosDB[i].lastName;
        informe.userId= usuariosDB[i].userId;
        }
    }

    for(let j =0; j <historiasClinicasDB.length; j ++){
        if(historiasClinicasDB[j].userId === informe.userId){
          informe.totalMedicalAppointments++;
        }
    }

    return informe;
}
console.log(userServicesResume("Camilo Serna"));*/

//necesitamos obtener una lista de usuarios que han visitado un hospital dado,
//para esto crea una funcion llamada hospitalUsers que reciba como parametro el nombre 
//del hospital y que retorne un array con el nombre COMPLETO de los usuarios que han visitado ese hospital 
//["Diego Sánchez", "Isabella Flores", "Fernando Sierra"]


function hospitalUsers(nombreHospital){
   let userId=[]
   let fullName=""
  let visitantes=[]
  for (let i=0; i <historiasClinicasDB.length;i++){
    if(historiasClinicasDB[i].hospitalName === nombreHospital){
      userId.push(historiasClinicasDB[i].userId);
    }
  }

  for (let j=0; j <usuariosDB.length;j ++){
    if(userId.includes(usuariosDB[j].userId)){

       fullName= usuariosDB[j].firstName + " " + usuariosDB[j].lastName + " ";
       visitantes.push(fullName);
    }
  }
return visitantes;
}
console.log(hospitalUsers("Hospital Universitario del Valle"))

//Necesitamos obtener cual es el hospital de preferencia (mas usado) de un usuario dado, 
// para esto crea una funcion llamada userPreferredHospital que reciba como parametro el nombre de un usuario
//  y retorne el nombre del hospital de preferencia.

function sacarNombre(id){
    let fullName="";
    for(let i =0; i <usuariosDB.length;i++){
        if(usuariosDB[i].userId === id){
            fullName= usuariosDB[i].firstName + " " + usuariosDB[i].lastName
        }
    }
return fullName;
}
console.log(sacarNombre("usr_082"));

function userPreferredHospital(nombreUsuario){
  let hospitalPreferencia="";
  if ()
  

}