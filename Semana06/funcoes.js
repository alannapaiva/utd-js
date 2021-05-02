/////////////////////////////////////////////  AULA 01  ////////////////////////////////////////// 

// function Person(){
//     this.name = '';
//     this.age = '';
// }

// let p1 = new Person();

// p1.name = "Joana";
// p1.age = "23";

// console.log(p1.name);
// console.log(p1.age);

// let aluno={
//     nome: 'Joana',
//     idade: 22,
//     curso: 'eng civil'
// }
// aluno.turno = 'manhã';

// console.log(aluno.nome);
// console.log(aluno.idade);
// console.log(aluno.curso);


//desestrutuação
// let {nome, idade} = aluno;

// console.log(nome);
// console.log(idade);
// console.log(aluno.turno);

/////////////////////////////////////////////  AULA 02   //////////////////////////////////////////
// let student={
//     name: 'Joana',
//     age: 22,
//     course: 'eng civil',
//     get getName(){
//         return this.name;
//     },
//     set changeName(newName){
//         this.name = newName;
//     },
//     get getAge(){
//         return this.age;
//     },
//     set changeAge(age){
//         this.age = age;
//     }

// }

// student.changeName = 'Lara';
// student.changeAge = '30';
// console.log(student.getName);
// console.log(student.getAge);

////////////////////////////////////////////  AULA 03  //////////////////////////////////////////
class Account{
    constructor(){ 
        this.funds =0;
    }
    sacking(value){
        if(value > this.funds)
            console.log('Insufficient funds!');
        else
            this.funds = this.funds -= value; 
    }

    deposit(value){
        this.funds+=value;
    }
}

class PoupanceAccount extends Account{
    rendimento(tax){
        this.funds+=this.funds * (tax)/100;
    }
}

class CurrentAccount extends Account {
    manutencao(tax){
        this.funds-= this.funds * (tax)/100;
    }
}

let c1 = new PoupanceAccount;

c1.deposit(1000);
c1.rendimento(10);
c1.sacking(300);
console.log(c1);
