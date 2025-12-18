// Add 'Py' to Start of String if Not Present
//Write a JavaScript program to create another string by adding "Py" in front of a given string. 
// If the given string begins with "Py" return the original string.  

function crear(string){
    if (string [0] ==="p" && string[1] === "y"){
return string;
    }else{
        return "py"+string;
    }
}
console.log(crear("thon"));