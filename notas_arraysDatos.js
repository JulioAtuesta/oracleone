// el + se toma como concatenaciòn de cadenas
// aunque sean strings js los interpreta como numeros cuando hay - * /
let one ='100' + '10'; 
console.log(one);
let dos = parseInt('100') + parseFloat('10');
console.log(dos);
//  se puede hacer parse a una string de entrada, en caso que no sea un numero la funcion retorna NaN (not a number) y No genera error
// el scope de let se limita a su bloque de codigo, var esta disponible en todos los bloques (global?) var no deberìa usarse en codigo nuevo 

/* Plantillas de trexto */
let comillas =' ` ';
console.log(`con comillas al reves ${comillas} y esta sintaxis usando $ {variable} concatenamos texto con variables, a la variable se le añade el espacio de forma automatica,
             variable uno ${one} variable dos ${dos}`);

/* 
 !listas arrays
*/
lista = ['cero','uno','dos'];
lista_dos = new Array('tes', 'cuatro', 'cinco');
console.log(lista.push('añade nuevo elemento al final del array y retorna el lenght de la lista'));
//aunque la lista sea const se peuden añadir elementos nuevos, pero no se peuden modificar los ya declarados
console.log(lista.length);
console.log(lista.unshift('añade nuevo elemento al inicio del array y retorna el lenght de la lista'));
console.log(lista.length);
//los indices son 0 1 2 3, el tamaño es 4
console.log(lista[0]);
console.log(lista[lista.length-1]);//imprimir la final sin saber el tamaño
console.log(one + lista[900]); // no genera error ingresar a una Sposiciòn inexistente del array, retorna un string con valor 'undefined'
console.log(lista_dos.splice(0,2,'apoco',2));
/* 
? splice quita elementos, primer parametro desde donde va a borrar, segundo parametro cuantos va a quitar
? y añade -solo si se envian como parametros- elementos nuevos, retorna los valores eliminados,
? se pueden borrar N y añadir M, puede acortar o alargar la lista */

console.log(lista_dos);

/* remover elementos 
?shift remueve el primero
?pop remueve el ultiimo
si la lista esta vacia retorna undefined*/
console.log(lista.pop());
console.log(lista.shift());
/*
!funcion flitro en arrays 
?elements es una palabra generica, puede ser cualquiera pero representa los elementos de la lista original
?estos elementos tienen que cumplir con una condiciòn para pasar el filtro y entrar a la segunda lista
?que es retornada por la funcion filter */

filtro = lista.filter(elements => elements.length>3);
console.log(filtro);
/* modifica la lista, la orderna alfabetica o numericamente, tambien se usa para retornar valores booleanos si el numero es mayor o menor*/
lista.sort();
console.log(lista);
/* join retorna una string */
console.log(lista.join('-'));
console.log(`dos esta en el index ${lista.indexOf('dos')}`); //index of
concatenacion = lista.concat(lista_dos);//concatc retorna, no afecta al elemento base
console.log(concatenacion);
/*
? == compara valor  === compara valor y tipo de dato, '10' es diferente de 10, los operadores booleanos retornan true o false
? not ! and && or || estan en orden jerarquico 
*/
console.log(lista_dos.includes(2)); // INCLUDES retorna true or false

