let numeros = [10, 36, 48, 59, 75];


function calcularMedia(numeros) {

    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    let media = soma / numeros.length;
    return media;

}


let media = calcularMedia(numeros);


console.log(`A média dos números do array é: ${media}`);