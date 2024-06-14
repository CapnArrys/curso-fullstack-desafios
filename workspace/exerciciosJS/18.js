let numeros = [10, 36, 48, 59, 75];


function encontrarMaiorNumero(numeros) {

    let maiorNumero = Math.max(...numeros);
    return maiorNumero;

}


let maior = encontrarMaiorNumero(numeros);


console.log(`O maior número do array é: ${maior}`);
