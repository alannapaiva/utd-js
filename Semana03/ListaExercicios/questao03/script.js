var mult3 =0;
var mult5=0;
for(i=0;i<100;i++){
    if(i % 3 == 0){
        mult3 += i;
        //document.write(i, "<br>");
    } if(i% 5 ==0){
        mult5+=i;
    }
}
 document.write("Somatórios dos Múltiplos de 3: " + mult3 + "<br>");
 document.write("Somatórios dos Múltiplos de 5: " + mult5 + "<br>");
 document.write("Somatórios dos Múltiplos de 5 e 3: " + parseInt(mult3+mult5));