lista = ['cero','uno','dos'];
lista_dos = ['cero','uno','dos'];

if(0){
    console.log('cumple la condicion 1');
}else if(2){
    console.log('cumple al condición dos, no ha evaluado la 2.1');
    if(2.1){
        console.log('cumple las condiciones 2 y 2.1');
    } else{
        console.log('evaluó la condición 2.1, solo cumple la condición 2');
    }
}else{
    console.log('no cumple ninguna condicion');
}
/* 
! sintaxis for switch while do while for in 
?for
?switch case
?while
?do while
?for in
*/
console.log(lista);
 for(let op of lista){ // similar a for each o for i in list
//for(let i=0; i<=lista.length; i++){  // For
   // op=lista[i];  
switch (op){                         // Switch case 
    case 1:
        console.log(`${op} cumple el caso uno`);
        break;
    case 'dos': 
        console.log(`${op} cumple el caso dos`);
        break;
    case false:
        console.log(`${op} cumple el caso tres`);
        break;
    default:
        console.log(`${op} no cumple ningun caso`);
        break;
}
}
var i=0;
while ( i<100 ){   //while
    if(i%3 ==0){
        if(i%5 ==0){        
            console.log(i + ' fizzBuzz');
        }
        else{
            console.log(i + ' fizz');
        }    
    }else if(i%5==0){
        console.log(i+' buzz');

    } ;
    i++;
}
i =1;
do{               //do while
    console.log('por una poronga ' + i);
    i++;
}while(!(i%7==0 && i %2==0)) //while true hasta que while false

dick = {uno:1, dos:2, tres:3, cuatro:4,            //diccionario
        cinco:5, seis:6, siete:7, ocho:8,
        nueve:9, diez:10, once:11, doce:12}         
let numbero='';           
for (let key in dick) {                          // for_in
        if(dick[key]>=3 && dick[key]%2==1){
               numbero += dick[key] + '_'; // usar un metodo pop para diccionarios
        }
}console.log('numberos: '+numbero);


/*  Fizz Buzz */

function fizzbuzz(numero){

let mul3 = numero;
let mul5 = numero;
if(numero == 0){return(`${numero}: void`)};

while(mul3 > 0){
        mul3 = mul3 - 3;
        if(mul5 > 0){
            mul5 = mul5 - 5;
        }
    }if(mul3 == 0){
        if(mul5 == 0){
            return(`${numero}: FizzBuzz`);
        }else {return(`${numero}: Fizz`);}
    }else if(mul5 == 0){
        return(`${numero}: Buzz`);
    }else{return(`${numero}: void`)}
}   

const listado =[7,9,54,1,2,-2,0,0,97,8,6,76,8,54,12,32,45,68,74,68,98,85,26,69,85,74,654,53,66];
console.log('FizzBuzz');
for(let i of listado){
    console.log(fizzbuzz(i));
}