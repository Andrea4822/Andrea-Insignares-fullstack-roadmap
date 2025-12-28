const productos = [
  { id: 1, nombre: "Laptop", categoria: "Tecnología", precio: 3500000, stock: 5 },
  { id: 2, nombre: "Mouse", categoria: "Tecnología", precio: 80000, stock: 0 },
  { id: 3, nombre: "Silla", categoria: "Hogar", precio: 450000, stock: 3 },
  { id: 4, nombre: "Escritorio", categoria: "Hogar", precio: 950000, stock: 1 },
  { id: 5, nombre: "Audífonos", categoria: "Tecnología", precio: 180000, stock: 10 },
  { id: 6, nombre: "Lámpara", categoria: "Hogar", precio: 120000, stock: 0 },
  { id: 7, nombre: "Monitor", categoria: "Tecnología", precio: 1200000, stock: 4 },
  { id: 8, nombre: "Teclado", categoria: "Tecnología", precio: 150000, stock: 2 }
];

//Crear una función contarProductosSinStock que devuelva cuántos productos no tienen stock.
/*function contarProductosSinStock(array){
    let sumaSinStock = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i].stock <= 0){
            sumaSinStock++;
        }
    }
    return sumaSinStock;
}

console.log(contarProductosSinStock(productos));*/

// Crear la función calcularValorTotalInventario que devuelva el valor total del inventario
//(precio × stock de cada producto).

function calcularValorTotalInventario(array){

    for (let i =0; i <array.length; i ++){
        let nombreProducto=array[i].nombre;
        let precioPorProducto= array[i].precio* array[i].stock;
        let resultado= ("Nombre " +  nombreProducto  + "precio " + precioPorProducto);
        console.log(resultado);
    }
}
calcularValorTotalInventario(productos);


