// Tarea Mari

const temperatura= 70;

function cuantoCalorHace( temperatura){
  if (temperatura >30){
 console.log ("Hace muchoooo calor, nos estamos derritiendo");
  } else if (temperatura < 30){
    console.log ("Hace muchooo friooooo, nos estamos congelando");
  } else {
    console.log ("El clima está templado")
  }
   
}
cuantoCalorHace(temperatura);


const nota = 6;
 function ganeLaMateria( nota){
  if (nota >=9){
 console.log ("Excelente, ganaste la materia");
  }else if( nota >=7){
    console.log ("Bien");
  } else if ( nota >= 5){
console.log ("Regular");
  }else if (nota <5){
    console.log ("Reprobado");
  }else{
    console.log ("Dato invalido")
  }
 }
 ganeLaMateria(nota);

 const opcion= "3";

 switch (opcion){
  case "1" : 
  console.log ("Agregar producto")
  case "2":
    console.log ("Eliminar producto")
    case "3":
      console.log ("Salir")
      break;
 }

 const usuarioActivo = true;
 const rol = "usuario";

 function estaraActivoElUsuario (usuarioActivo, rol){
  if (usuarioActivo === true && rol === "Admin"){
    console.log ("Acceso total");
  } else if ( usuarioActivo === true && rol !== "Admin"){
    console.log ("Acceso limitado");
  } else if  (usuarioActivo === false){
    console.log ("Acceso denegado");
  }else{
    console.log ("Datos invalidos")
  }
  
  }
  estaraActivoElUsuario (usuarioActivo, rol)
