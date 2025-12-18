//19. Check if Integer is Within 20 of 100 or 400
//Write a JavaScript program to check whether a given integer is within 20 of 100 or 400

function check(numero){
    if(numero >=20 && numero <=100 || numero === 400){
        return true;
    }else{
        return false;
    }
}
console.log(check(6));