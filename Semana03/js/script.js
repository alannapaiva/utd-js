/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CONTEUDO DA AULA 01

var palavra = 'JavaScript';
let num1 =10, num2=25;
palavra = num1+num2;
console.log(palavra);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);

console.log(num1>=num2);
console.log(num1<=num2);
console.log(num1==num2);
console.log(num1!=num2);

console.log(num1 == palavra);
console.log(num1===palavra);

palavra = "10";

if(num1===palavra) 
     console.log('Os dois são do mesmo tipo!');
    else if(num1==palavra)
          console.log('Os dois sao iguais');
        else
            console.log('Os não sao do mesmo tipo e nem iguais!');


//let opcao=1;
let opcao = parseInt(prompt("Escolha entre 1 a 4:"));
switch(opcao){
    case 1:
        console.log("ensino medio");
        break;
    case 2:
        console.log("graduação");
        break;
    case 3:
        console.log("mestrado");
        break;
    case 4:
        console.log("doutorado");
        break;
    default:
        console.log("escolaridade não definida!");
        break;
}  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CONTEUDO DA AULA 02 - Estruturas de repetição
const painel = document.getElementById('painel');  //pegando o elemento por id
let texto = '';
let flag = true;
let cont = 0;

while(flag){
    if(cont<10){
        console.log("Trabalhando....");
        cont++; //operador de incremento
        texto = "trabalhando";
        let resultado = document.createTextNode(texto +" "); //variavel resultado recebe o texto criado  

        painel.appendChild(resultado);

    } else{
        flag = false;
    }
}

for(let x =0; x<=20;x+=2){
    let resultado = document.createTextNode(x +" "); 

    painel.appendChild(resultado);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CONTEUDO DA AULA 03 - Funções
const painel = document.getElementById('painel');

let texto ='';
let num1 = 30, num2 = 10;

//função com parametro e com retorno
function soma(var1, var2){
    return var1+var2;
}
//função sem parametro e com retorno
function endereco(){
    return "Av. Beira Mar 202";
}
//função sem parametro e sem retorno
function helloWorld(){
    console.log("Hello World!");
}

helloWorld();
texto = endereco();
//texto = soma(num1, num2);

const result = document.createTextNode(texto);
painel.appendChild(result);


var idade;
if(idade=18){
    console.log("Já pode tirar a habilitação")
}
