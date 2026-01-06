// Nos reportaron sobre un fraude de estudiantes que estan matriculados 
//(su status debe ser "Matriculado") en carreras que no son ofrecidas en la universidad a 
//la que pertenecen, Necesitamos generar una lista con los siguientes datos por cada uno de
//los estudiantes que estan cometiendo el fraude.

const studentsDB = require("./students_db.json");
const universitiesDB = require("./universities_db.json");
const gradesDB = require("./grades_db.json");

   // {
    //fullName: "",
      //userId: "",
     // universityName: "",
   // }

   function check (){
    let informe =[];
    for ( let i =0; i <studentsDB.length;i ++){
        let estudiantes= studentsDB[i];
        if (estudiantes.status === "Matriculado"){
            for (let j=0; j <universitiesDB.length;j++ ){
                if( estudiantes.career !== universitiesDB.offeredCareers){
                    informe.push({
                        fullName: estudiantes.firstName + " "+ estudiantes.lastName,
                        userId: estudiantes.userId,
                        universityName: universitiesDB[j].universityName,
                    })
                    break;
                }
            }
        }
    }
    return informe
   }
   console.log (check());