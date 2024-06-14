function inverterStrings(strings) {

    return strings.map(str => str.split('').reverse().join(''));

}

let frutas = ["maçã", "banana", "laranja"];

let stringsInvertidas = inverterStrings(frutas);

console.log(`Strings invertidas: ${stringsInvertidas}` );
