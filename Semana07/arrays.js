// let vetor = ["uva", "mamao", "maçã", "maracuja", "melancia"];

// for(var x=0; x<vetor.length;x++){
//     console.log(vetor[x])
// }

// for(item in vetor){
//     console.log(vetor[item])
// }

// Usando o array .map
const vetor = [1,2,3,4,5,6,7];

const novoVetor = vetor.map(function(item){
    return item*2
})
console.log(novoVetor)

// Usando o array .reduce
const vetorRed = vetor.reduce(function(total,prox){
    return total+prox
})
console.log(vetorRed)

// Usando o array .filter
const filtro = vetor.filter(function(item){
    return item%3 == 0
})
console.log(filtro)

// Usando o array .find
const procure = vetor.find(function(item){
    return item ==6
}) 
console.log(procure)