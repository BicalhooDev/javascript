
// Criando um vetor para armazenar os números sequenciais
var numeros = [];

// Preenchendo o vetor com números sequenciais de 1 a 100
for (let i = 1; i <= 100; i++) {
numeros.push(i);
}

// Mostrando os números armazenados na tela
numeros.forEach(numero => {
console.log(numero) 
})

console.log(`quantidade de posições no array é de ${numeros.length}`)