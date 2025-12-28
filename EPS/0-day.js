const usuariosDB = require("./user-database.json");
const historiasClinicasDB = require("./medical-history.json");

//necesitamos obtener la ciudad de un usuario dado, para esto crea una funcion llamada userCity
//que retorne el nombre de la ciudad del usuario. la funcion puede recibir el id del usuario o el nombre
//completo del usuario,si el usuario no existe en nuestros registros debe retornar "usuario no existe".

function userCity(usuarioId){
  for (let i=0; i <usuariosDB.length; i ++){
    if(usuariosDB[i].userId ===usuarioId ){
      return usuariosDB[i].city;
    }else{
      return "Usuario no existe"
    }
  }
}
console.log(userCity("usr_001"));

//necesitamos saber si un usuario es de alto riesgo, para esto podemos usar la edad como un factor.
// Crea una funcion llamada userRiskByAge que reciba como parametro el nombre de un usuario y retorne "alto"
// si el usuario tiene mas de 60 años, "medio" si el usuario tiene entre 40 y 60 años
// y "bajo" si el usuario tiene menos de 40 años.

function userRiskByAge(idUsuario){
  for (let i =0; i <usuariosDB.length; i ++){
   if(usuariosDB[i].userId === idUsuario){
     if(usuariosDB[i].age >=60){
      return "Alto"
    }else if ((usuariosDB[i].age >= 40) && ( usuariosDB[i].age <=60)){
      return "medio"
    }else if (usuariosDB[i].age <40){
      return "Bajo"
    }else{
     return "No está en el rango"
    }
   }
  }
}
console.log(userRiskByAge("usr_021"));

// necesitamos obtener informacion de la ultima cita que el paciente tuvo con nosotros,
// para esto crea una funcion llamada userLastAppointment que reciba como parametro el nombre completo del usuario
//  o su id, la funcion debe retornar la siguiente informacion.

//{ userId: "", fullName: "", serviceId: "" speciality: "", hospitalName: "", medicalNotes: "", medicationsUsed: "", date: "" }

function sacarNombre(idUsuario) {
  let nombreCompleto = "";
  for (let i = 0; i < usuariosDB.length; i++) {
    if (usuariosDB[i].userId === idUsuario) {
      nombreCompleto += `${usuariosDB[i].firstName} ${usuariosDB[i].lastName}`;
    }
  }
  return nombreCompleto;
}
console.log(sacarNombre("usr_023"));

function userLastAppointment(idUsuario) {
  let fechaReciente="";
  let historiaPaciente = {
    userId: "",
    fullName: "",
    serviceId: "",
    speciality: "",
    hospitalName: "",
    medicalNotes: "",
    medicationsUsed: "",
    date: "",
  };
  for (let i = 0; i < historiasClinicasDB.length; i++) {
    if (historiasClinicasDB[i].userId === idUsuario && historiasClinicasDB[i].date >fechaReciente ){
       historiaPaciente.userId = historiasClinicasDB[i].userId;
    historiaPaciente.fullName = sacarNombre(idUsuario);
    historiaPaciente.serviceId = historiasClinicasDB[i].serviceId;
    historiaPaciente.speciality= historiasClinicasDB[i].speciality;
    historiaPaciente.hospitalName = historiasClinicasDB[i].hospitalName;
    historiaPaciente.medicalNotes = historiasClinicasDB[i].medicalNotes;
    historiaPaciente.medicationsUsed = historiasClinicasDB[i].medicationsUsed;
    historiaPaciente.date = historiasClinicasDB[i].date;
    fechaReciente= historiasClinicasDB[i].date;
    }
    }
   return historiaPaciente;
  }
  


console.log(userLastAppointment("usr_023"));
