let numeros = [10, 36, 48, 59, 75];


function encontrarMenorNumero(numeros) {

    let menorNumero = Math.min(...numeros);
    return menorNumero;

}


let menor = encontrarMenorNumero(numeros);


console.log(`O maior número do array é: ${menor}`);