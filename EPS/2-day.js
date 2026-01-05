//Por orden del gobierno debemos informar cuales hospitales del pais estan atendiendo la mayor 
// cantidad de pacientes, para esto crea una funcion llamada busiestHospitals que retorne una lista 
// de los 3 hospitales mas usados, los objetos de la lista deben tener la siguiente estrucutra:
//{ hospitalName: "Clínica Especialistas de Sincelejo" usersServed: 1200 }


const usuariosDB = require("./user-database.json");
const historiasClinicasDB = require("./medical-history.json");

function busiestHospitals(){
    let nombresHospitales={}
    let HospitalesMasUsados=[]
    for (let i =0; i <historiasClinicasDB.length; i ++){
        let nombre= historiasClinicasDB[i].hospitalName;
        if(nombresHospitales[nombre]){
            nombresHospitales[nombre]++
        }else{
            nombresHospitales[nombre]=1
        }
    }
    for (nombre in nombresHospitales){
        HospitalesMasUsados.push({hospitalName:nombre, usersServed:nombresHospitales[nombre]})
    }
    HospitalesMasUsados.sort((a,b) =>{
        return b.usersServed - a.usersServed
    })
    return HospitalesMasUsados.slice(0, 3);
}
console.table(busiestHospitals());

//Por control medico debemos informar sobre la ultima vez que un usuario se le administro cierto medicamento,
//  para esto crea una funcion llamada medicationUsedTracker, la funcion debe recibir 2 parametros, el primer
//  parametro puede ser el id del usuario o su nombre completo y el segundo parametro debe ser el nombre del medicamento, 
// la respuesta de la funcion debe dar la siguiente informacion:
//{ userId: "", fullName: "", date: "", hosp italName: "" doctor: "" }
//esos datos deben ser de la ultima vez que se le suministro el medicamento al usuario.

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

function medicationUsedTracker(nombreCompleto, nombreMedicamento){
    let fechaReciente="";
    let informacionMediamento={
        userId:"",
        fullName:"",
        date:"",
        hospitalName:"",
        doctor:"",

    }
    for(let i =0; i <historiasClinicasDB.length; i++ ){
        if(sacarNombre(historiasClinicasDB[i].userId) === nombreCompleto && historiasClinicasDB[i].medicationsUsed.includes(nombreMedicamento) && historiasClinicasDB[i].date > fechaReciente){
            informacionMediamento.userId= historiasClinicasDB[i].userId;
            informacionMediamento.fullName=sacarNombre(historiasClinicasDB[i].userId);
            informacionMediamento.hospitalName=historiasClinicasDB[i].hospitalName;
            informacionMediamento.doctor=historiasClinicasDB[i].doctor;
            informacionMediamento.date=historiasClinicasDB[i].date;
            fechaReciente=historiasClinicasDB[i].date;
           
        }

    }
    if (informacionMediamento.userId === "") {
        return "El paciente " + nombreCompleto + " no tiene registros del medicamento: " + nombreMedicamento;
}
 return informacionMediamento;
}
console.log(medicationUsedTracker("Janeth Fajardo", "noje"));

// El gobierno nacional nos acaba de informar sobre una irregularidad en nuestros centros de atencion,
//  resulta que por ley ningun doctor puede atender mas de 4 especialidades diferentes entonces el gobierno 
// nos esta pidiendo un informe sobre los doctores que han atendido mas de 4 especialidades, crea un script para 
// encontrar una lista de esos doctores y las especialidades que han impartido. (nota: debes crear una lista con 
// objetos donde cada objeto tenga el nombre del doctor y una lista con las especialidades que ha dado).


function check(){
    let informe ={}
    for (let i=0; i <historiasClinicasDB.length;i++){
        let nombreDoctor = historiasClinicasDB[i].doctor;
        let especialidad= historiasClinicasDB[i].speciality;
        if (informe[nombreDoctor] === undefined){
            informe[nombreDoctor]=[]
        }
        let especilidadEncontrada= false;
        for (let j=0; j <informe[nombreDoctor].length;j++){
            if(informe[nombreDoctor][j]=== especialidad){
                especialidadEncontrada=true;
                break;
            }
        }
        if( especilidadEncontrada=== false){
            informe[nombreDoctor].push(especialidad)
        }
    }
    let doctoresMuchasEspecialidades=[];
    for (nombreDoctor in informe){
        especialidad= informe[nombreDoctor];
        if (especialidad.length > 4){
            doctoresMuchasEspecialidades.push({doctor: nombreDoctor,especialidad: especialidad});
        }
    }
    return doctoresMuchasEspecialidades;
}
console.log(check())
