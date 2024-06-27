/**
 * Crear una tienda en JS usando arreglos de Nombre: Valor
 * autor: Diego De Jesus Arias Gonzalez
 * 4 de mayo de 2024
 */

let tienda = [];
let iteracion = [];
let sumar = 0;
let descuento;
let longitudArreglo;

tienda = [
    {id: 1, nombreProducto: 'arroz', tipoProducto: 'granos', tipoUnidad: 'gramos', unidad: 1000, precio: 2400},
    {id: 2, nombreProducto: 'lentejas', tipoProducto: 'granos', tipoUnidad: 'gramos', unidad: 500, precio: 1300},
    {id: 3, nombreProducto: 'carne de res', tipoProducto: 'carnes', tipoUnidad: 'gramos', unidad: 500, precio: 13500},
    {id: 4, nombreProducto: 'pollo entero', tipoProducto: 'carnes', tipoUnidad: 'gramos', unidad: 1000, precio: 12500},
    {id: 5, nombreProducto: 'cebolla larga', tipoProducto: 'verduras', tipoUnidad: 'gramos', unidad: 500, precio: 1300},
    {id: 6, nombreProducto: 'mora', tipoProducto: 'frutas', tipoUnidad: 'gramos', unidad: 500, precio: 1200},
];

//Crear un registro

tienda.push({id: 7, nombreProducto: 'lulo', tipoProducto: 'frutas', tipoUnidad: 'gramos', unidad: 500, precio: 1600},
    {id: 8, nombreProducto: 'papa', tipoProducto: 'verdura', tipoUnidad: 'gramos', unidad: 500, precio: 1200},)

longitudArreglo = tienda.length
    for(iteracion = 0; iteracion < longitudArreglo; iteracion++){
        if(tienda[iteracion].id==7){
            tienda[iteracion].precio=3600;
        }
        else{
            console.log("No existe el producto")
        }

        if(tienda[iteracion].tipoProducto=="carnes"){
            tienda[iteracion].precio=21300;
        }
        else{
            console.log("No existe el producto")
        }
    
        sumar = sumar + tienda[iteracion].precio

        if(tienda[iteracion].tipoProducto=='frutas'){
            descuento = descuentos(tienda[iteracion].precio);
        }
        else{
            descuento = 0;
        }
        
        console.log(descuento);

    }

    
console.log(tienda);
console.log('Suma de todos los productos:');
console.log(sumar);
