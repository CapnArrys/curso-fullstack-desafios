var nome = "sicrano";

const cpf = "123.123.123-10";


var sobrenome = () => {
    let sobreNome = "silva";
    return sobreNome;
}

console.log(`O nome é: ${nome}`);
console.log(`o Sobrenome é: ${sobrenome()}`)
console.log(`o cpf é: ${cpf}`)

console.log(`O nome é: ${nome} ${sobrenome()} , o cpf é: ${cpf}`);



