// FUNÇÃO
// BLOCO DE CÓDIGO REUTILIZÁVEL
// TORNAR A MANUTENÇÃO MAIS PRÁTICA

// let a = 2;
// let b = 5;
// let c = a+b;

// function soma(a,b){
//     return a+b;
// }

// let a = soma (2,5);
// let b = soma (9,5);

// const soma1 = (a,b) => a+b;

// let c = soma1 (2,5);
// let d = soma1 (9,5);


// console.log (a,b);
// console.log (c,d);


// function soma (a,b){
//     return a+b;
// }

// function subtracao (a,b){
//     return a-b
// }

// function multiplicacao (a,b){
//     return a*b
// }

// function divisao (a,b){
//     return a/b
// }

// function expoente (a,b){
//     return a ** b
// }

// function modulacao (a,b){
//     return a % b
// }

// const soma1 = (a,b) => a+b;
// const subtracao1 = (a,b) => a-b;
// const multiplicaco1 = (a,b) => a*b;
// const divisao1 = (a,b) => a/b;
// const expoente1 = (a,b) => a**b;
// const modulacao1 = (a,b) => a%b;

// const convertToFahrenheit1 = (c) => (c * 9) / 5 + 32; 

// atividade funcao

// questao 1
// function saudarcliente(nome) {
//     return `Olá ${nome}, seja bem vindo á nossa confeitaria!`;
// }

// alert(saudarcliente(promt("informe o seu nome:")));

// questao 2

// function CalculadoradeBolo(precoQuilo, peso) {
//     const total = precoQuilo * peso;
//     return `valor a pagar: R${total.toFixed(2)}`;
// } 

// console.log(CalculadoradeBolo(40, 2));

// questao 3
function conversordeMedida(gramas) {
    const gramas = parseFloat(prompt("digite o valor em gramas"));
    const quilos = gramas / 1000;

    alert(`${gramas}`)
}