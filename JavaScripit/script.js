// ATIVIDADE 1 

// let num1 = 2;
// let num2 = 10;

// console.log("Soma: " +(num1+num2));
// console.log("Subtração: " +(num1 - num2));
// console.log("Multiplicação: " +(num1 * num2));
// console.log("Divisão: " +(num1 / num2));

// ATIVIDADE 2

// let base = 6;
// let altura = 3;

// console.log ("multiplicação: " +(base * altura));


// let base = 9;
// let altura = 2;

// console.log ("multiplicação:" +(base * altura));


// ATIVIDADE 3

// let real = 85.0;
// let dolar = 5.0;

// console.log ("divisao:" +(real / dolar))



// ATIVIDADE 4

// let base = 5;
// let expoente = 3;

// console.log ("potenciacao: " +(base ** expoente));

// ATIVIDADE 5

// let nota1 = 1.4;
// let nota2 = 2.3;
// let nota3 = 3.2;
// let nota4 = 4.9;

// let soma = nota1 + nota2+ nota3+ nota4;
// let media = soma / 4;

// console.log ("A media é: " +(media))

// ATIVIDADE 6 

// let c = 20; 
// let f = (c * 9/5) +32; 

// console.log (f);

// ATIVIDADE 7 

// let resultado = 15 % 4;

// console.log(resultado);

// ATIVIDADE 8

// let desconto = 20; 
// let produto = 180;

// console.log (desconto * produto / 100);

// ATIVIDADE 9

//  let numero = 60;
//  let antecessor = 59;
//  let sucessor = 61;

//  console.log ("antecessor de"  + "numero" + "é;" + antecessor);
//  console.log ("sucessor de"  + "numero" + "é;" + sucessor);

// ATIVIDADE 10

// let peso = 45;
// let altura = 9;
// let numero= peso * altura / 2;

// console.log (numero)


// ATIVIDADE 11

// let numero1 = 10;
// let numero2 = "10";
// let resultado = (numero1 === numero2);

// console.log (resultado);


// ATIVIDADE 12

// let idadex = 19;
// if (idade >= 18) {
//     console.log ("Maior ou igual a 18 anos");
// }

// // ATIVIDADE 13 

// let javascript = "javascript";
// let Javascript = "Javascipt";

// let resultado = javascript == Javascript;

// console.log (resultado)

// Atividade 17

// let saldo = 1000
// let saque = 1200
// if (saldo >=saque){
//     console.log("saque disponivel")
// }

// else{
//         console.log("saque indisponivel")

// }

// ATIVIDADE 18

// let T = true
// let t = "true"
// if (T===t){
//     console.log("Sim, o tipo das variaveis são iguais")
// }

// else (
//         console.log("Não, o tipo das variaveis não são iguais")

// )

// ATIVIDADE 19

// let N = 60;
// if ( N>=10 && N<=50){
//     console.log(`sim, ${N} esta entre 10 e 50`)

// }

// else{
//     console.log(`Não, ${N} não esta entre 10 e 50`)
// }
//  ATIVIDADE 20

// let user= "admin";
// let senha= "1234";
// if (user === "admin" && senha === "1234"){
//     console.log("Login bem sucedido")
// }

// else{
//     console.log("Usuario ou senha invalido, tente novamente!")
// }

// ATIVIDADE 21

// let N = 16;
// if ( N>=18 && N<=70){
//     console.log(`${N}: sim, essa pessoa pode votar ` )
// }
// else{
//         console.log(`${N}: Não, essa pessoa não possui idade suficiente para votar` )


// ATIVIDADE 22

// let D= "terça"
// if (D == "sabado" || D==  "domingo"){
//     console.log(`Sim, ${D} é um final de semana`)
// }

// else {
//         console.log(`Não, ${D} não é um  final de semana`)

// }

// ATIVIDADE 23

// let n= -1
// if ( n>=0){
//     console.log(` sim, ${n} é um numero positivo`);
// }

// else{
//        console.log(` Não, ${n} não é um numero positivo`);

// }

// ATIVIDADE 24 

// let estachovendo= true
// console.log("esta chovendo: ",  !estachovendo);


// ATIVIDADE 25

// let media = 8.0
// let ft= 5 
// if ( media >=7.0 && ft <=10){
//     console.log("Aluno aprovado!")
// }
// else{
//         console.log("Aluno desaprovado!")

// }

// ATIVIDADE 26

// let n1 = 0;
// let n = 5;

// if (n == n1){
//     console.log("Sim o número é igua a zero!")
// }

// else{
//     console.log("O número não é igual a zero!")
// }


// // ATIVIDADE 27

// let a = 5;
// let b = 10;

// a = b;
// b -= 5;

// console.log(a,b);


// MODULO 2 

// ATIVIDADE 8 

// let valor = 10.0 ;
// let destino = "EUR" ;

// switch (destino) {
//         case "EUR" : {
//             console.log( "valor em euro " + (valor/6.0).toFixed(2))
//             break;
//         }
//         case "USD" : {
//             console.log( "valor em euro " + (valor/5.0).toFixed(2))
//             break;
//         }
//         case "GBP" : {
//             console.log( "valor em euro " + (valor/7.0).toFixed(2))
//             break;
//         }
//         default: {
//             console.log(" DIGITE UM VALOR OU DESTINO VALIDO")
//             break;
//         }
// }

// ATIVIDADE 9 

// let cat= "criança"

// switch (cat) {

//     case "criança" : {
//         console.log(` A faixa etaria de ${cat} é de : 0 a 12 anos `)
//         break;
//     }

//     case "adolecente" : {
//         console.log(` A faixa etaria de ${cat} é de : 13 a 17 anos `)
//         break;

//     }
//     case "adulto": {
//         console.log(` A faixa etaria de ${cat} é de : 18 a 64 anos `)
//         break;
//     }
//     case "idoso" : {
//         console.log(` A faixa etaria de ${cat} é de : 65+ anos `)
//         break;
//     }
// default : {
//   console.log("Não faz parte da categoria")
//   break;

// }

// }

// ATIVIDADE 10

// let v= "carro"

// switch(v){
//     case "carro" :{
//         console.log(`valo do pedagio para ${v} : 7.0 reais`)
//         break;
//     }
//     case "caminhão" :{
//         console.log(`valo do pedagio para ${v} : 40.0 reais`)
//         break;
//     }
//     case "moto" :{
//         console.log(`valo do pedagio para ${v} : 3.0 reais`)
//         break;
//     }
//     default : {
//         console.log("não é um veiculo")
//         break;
//     }
// }

// ATIVIDADE 11

// let d = "7"

// switch (d) {
//     case "2":
//     case "3":
//     case "4":
//     case "5":
//     case "6":
//         {
//             console.log("dia útil")
//             break;
//         }

//     case "1":
//     case "7": {
//         console.log("Fim de semana")
//         break;
//     }
//     default :{
//         console.log("Não corresponde a um dia da semana")
//     }

// }

// ATIVIDADE 12

//  let s = "5"
//  switch ( s ){
//     case "1" :{
//         console.log("Aguardando")
//         break;
//     }
//     case "2" :{
//         console.log("Enviado")
//         break;
//     }
//     case "3" :{
//         console.log("Entregue")
//         break;
//     }
//     default:{
//         console.log("INVALIDO!")
//     }
//  }

// ATIVIDADE 13

// let l = "n"

// switch (l){

//     case "n" : {
//         console.log("norte")
//         break;
//     }

//     case "s" : {
//         console.log("sul")
//         break;
//     }

//     case "l" : {
//         console.log("leste")
//         break;
//     }

//     case "o" : {
//         console.log("oeste")
//         break;
//     }
//     default:{
//         console.log("invalido")
//         break;
//     }

// }

// ATIVIDADE 14

// let c = "admin"

// switch(c){
//     case "admin" : {
//         console.log(`${c} : Pode criar, editar e apagar conteudos`)
//         break;
//     }
//     case "editor" : {
//         console.log(`${c} : Pode criar, editar conteudos mas não pode apagar usuarios nem mudar permissoes`)
//         break;
//     }
//     case "visitante" : {
//         console.log(`${c} : so pode visualizar`)
//         break;
//     }
//     default: {
//         console.log("invalido")
//     }
// }

