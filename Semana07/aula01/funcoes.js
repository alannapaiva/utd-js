let lista = [];

lista[0] = "leite";
lista[1] = "carne";
lista[2] = "frango";
lista[3] = "maçã";
lista[4] = "abacate";
lista[5] = "peixe";

lista.push("uva"); // adiciona no final do array
lista.pop();  //retira o ultimo elemento do array

lista.unshift("aveia"); //insere um novo item na primeia posição do array//
lista.shift(); //retira o primeiro elemento do array

lista.splice(2,3, "melancia" );  // pode tanto retirar como adicionar um elemento no array

console.log(lista);

