/*Santa ha recibido una lista de regalos, pero algunos están defectuosos.
Un regalo es defectuoso si su nombre contiene el carácter #.
Ayuda a Santa escribiendo una función que reciba una lista de nombres de
regalos y devuelva una nueva lista que solo contenga los regalos sin defectos.
Ejemplos


onst gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)
// ['car', 'ball']*/

const gifts1 = ['car', 'doll#arm', 'ball', '#train'];
function returnGifts(List){
    let  array= [];
    for (let i = 0; i < List.length; i++) {
        if (!List [i].includes ("#")){
            array.push(List[i])
        }
        
        
    }
    return array;
}
console.log(returnGifts(gifts1));

const gifts2 = ['#broken', '#rusty'];
function returnGifts(List2){
    let  array1= [];
    for (let i = 0; i < List2.length; i++) {
        if (!List2 [i].includes ("#")){
            array1.push(List2[i])
        }
        
        
    }
    return array1;
}
console.log(returnGifts(gifts2));


