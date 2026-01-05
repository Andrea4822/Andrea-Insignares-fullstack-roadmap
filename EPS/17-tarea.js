//necesitamos obtener la ciudad de un usuario dado, para esto crea una funcion llamada userCity 
//que retorne el nombre de la ciudad del usuario. la funcion puede recibir el id del usuario o el 
//nombre completo del usuario, si el usuario no existe en nuestros registros debe retornar "usuario no existe".


const usuariosDB = require("./user-database.json");
const historiasClinicasDB = require("./medical-history.json");

/*function userCity(idUsuario){
    let ciudad=""
    for( let i =0; i <usuariosDB.length; i++ ){
        if(usuariosDB[i].userId === idUsuario){
        return usuariosDB[i].city;
    }
    }
    return "No existe"
}

console.log(userCity("usr_142"))*/

//Necesitamos obtener cual es el doctor preferido (mas visitado) de un usuario dado, 
//para esto crea una funcion llamada userPreferredDoctor que reciba como parametro el nombre de un usuario
// y retorne el nombre del doctor de preferencia.

/*function userPreferredDoctor(idUsuario){
    let doctores=[]
    for(let i=0; i <historiasClinicasDB.length;i++){
        if(historiasClinicasDB[i].userId === idUsuario){
            doctores.push(historiasClinicasDB[i].doctor)
            if(){

            }
          
}
    }
    return doctores

}
console.log(userPreferredDoctor("usr_183"))*/

// crea funcion
// recorre base de datos historiaclinica
// si usurio es igual al userid
// verifica todos los doctores a los que ha visitado el usuario
//me devuelve todos los doctores
// si un doctor se repite mas que los otros

//Necesitamos obtener cual es el medicamento mas consumido de un usuario dado,
//para esto crea una funcion llamada userMostConsumedMedication que reciba como parametro el nombre del
 //usuario y retorne el nombre del medicamento mas usado.


 // crea una funcion
 // recorre el for de usuario
 // crea una variable full name
 //condicion verificar si nombre completo es igual a fullname
 // acceder a medicamentos del usuario
 // que me devuelva el array de medicamentos del usuario
 
 function userMostConsumedMedication(nombreUsuario){
    let fullName;
    let medicamentos=[];
    for(let i =0; i <usuariosDB.length;i ++){
        fullName=usuariosDB[i].firstName+ usuariosDB[i].lastName[i]
        if(fullName === nombreUsuario){
           for(let j; j <historiasClinicasDB.length; j++){
            medicamentos.push(historiasClinicasDB[j].medic)
           }

        }

    }

 }