// string que será invertida
let stringOriginal = "Olá, meu nome é Leticia!";

// variável para armazenar a string invertida
let stringInvertida = "";

// Percorre a string original de trás para frente
for (let i = stringOriginal.length - 1; i >= 0; i--) {
    stringInvertida += stringOriginal[i]; // Adiciona cada caractere na nova string
}

// Exibe a string original e a string invertida
console.log("String Original:", stringOriginal);
console.log("String Invertida:", stringInvertida);
