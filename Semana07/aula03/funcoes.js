let numeros [1,2,3,4

let [a,...b] = numeros;

console.log(a);
console.log(b);
/////////////////////////////////////////////////////////
let numeros = [1,2,3,4];

const soma = numeros.reduce(function(resultado,item){
    return resultado + item
})
console.log(soma);
/////////////////////////////////////////////////////////
const filtro = numeros.filter(item=>item>6);
console.log(filtro);

const alunos = [
    {name:'Joao', nota: 8},
    {name:'ana', nota: 10},
    {name:'paulo', nota: 5},
    {name:'carlos', nota: 6}
];

const aprovados = alunos.filter(alunos=>aluunos.notas>=7)
console.log(aprovados)