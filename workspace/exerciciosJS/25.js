function converterParaMaiusculas(strings) {

    return strings.map(str => str.toUpperCase());
    
}

let strings = ["maçã", "banana", "laranja"];

let stringsMaiusculas = converterParaMaiusculas(strings);

console.log(`Strings em letras maiúsculas: ${stringsMaiusculas}` );