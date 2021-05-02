let tag = document.getElementsByTagName("ul");
let ordered = document.getElementsByTagName("ol");
let novoElemento = document.createElement("li");

let novoElemento2 = document.createElement("li");

novoElemento.innerText = "PHP";
novoElemento2.innerText = "Ruby";

ordered[0].appendChild(novoElemento);
ordered[0].appendChild(novoElemento2);


