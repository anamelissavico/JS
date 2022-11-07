var numero= 5
var string= "texto"

console.log (numero)
console.log (typeof (numero))

console.log (string)
console.log (typeof (string))


var i=0;

var numero1=3;
var numero2=6;
var numero3=9;

var media= (numero1+numero2+numero3)/3;

console.log("A média dos números 3, 6, 9 é " + media);

var ap1=1.5;
var ap2=2.5;
var as=6.0;

var media= (ap1 + ap2 + as);

console.log ("A média total é " + media)

var nomePessoa= "Julio";
var idadePessoa= 19;

if (idadePessoa>=18) {
    console.log("Você é maior de idade já pode beber!");
}
else {
    console.log("Você ainda é menor de idade :(");
}

var numero1= 9;
var numero2= 15;
var numero= 7;
var maiorNumero=0;

if (numero1 > numero2 && numero1 > numero3) {
    maiorNumero=maiorNumero+numero1
}
if (numero1<numero2 && numero2>numero3){
    maiorNumero=maiorNumero+numero2
}
else {
    maiorNumero=maiorNumero+numero3
}

console.log ("O maior número é " + maiorNumero)