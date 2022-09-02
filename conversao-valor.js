// tipo de dados

//conversao implicita

const numero = 456;
const numeroString = Number ("456");

// posso utilizar o Number antes de atribuir o valor da variável, ja que é lido primeiro da esquerda para direita

console.log(numero === numeroString)
console.log(numero == numeroString)

console.log(numero + numeroString); 

// = atribuição de valor à variável
//== comparação de valores dentro da varíavel
// === comparação de valores considerando a propriedade da variável


// conversão explícita

console.log( numero + Number (numeroString));


//Number - definição para usar numero
//String - definição para texto

