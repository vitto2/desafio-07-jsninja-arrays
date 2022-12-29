/*
Crie um array com 5 items (tipos variados).
*/
let myArray = [1, "dois", true, {nome: "Vitor"}, null]
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) { 
    myArray.push(item); 
    return myArray; 
}
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem([15,"sete",false]);
console.log(myArray)
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${myArray[5][1]}`);
// ?

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log(`O primeiro array em ${myArray.length} itens.`)
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log(`O segundo array tem ${myArray[5].length} itens`);
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
let i = 10;
let array = [];
while( i<=20) { 
    if( i % 2 == 0)array.push(i)
    i++; 
}
console.log(array);

// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
let j = 10;
let array2 = [];
while( j<=20) { 
    if( j % 2 != 0)array2.push(j)
    j++; 
}
console.log(array2);
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

console.log( 'Números pares entre 100 e 120:' );
let arrayq = [];
for(let q = 100; q<=200;q++) { 
    if(q % 2 == 0) arrayq.push(q);
}
console.log(arrayq);
// ?

console.log( 'Números ímpares entre 111 e 125:' );
// ?
let arrayp = [];
for(let p = 111; p<=125;p++) { 
    if(p % 2 != 0) arrayp.push(p);
}
console.log(arrayp);