// Função que verifica se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
    // Inicializa os dois primeiros números da sequência de Fibonacci
    let a = 0; // Primeiro número da sequência
    let b = 1; // Segundo número da sequência

    // loop para calcular os números de Fibonacci até alcançar ou ultrapassar o número informado
    while (a < num) {
        let temp = a; // Guarda o valor atual de 'a' em uma variável temporária
        a = b;        // Atualiza 'a' para o valor de 'b' (próximo número da sequência)
        b = temp + b; // Calcula o próximo número da sequência somando 'temp' (antigo 'a') e 'b'
    }

    // Após o loop, verifica se o número informado é igual a algum número da sequência
    if (a === num) {
        // Se for igual, retorna uma mensagem dizendo que o número pertence à sequência de Fibonacci
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        // Caso contrário, retorna uma mensagem dizendo que não pertence
        return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
    }
}

// Teste do programa com um número qualquer
const numero = 21;
console.log(isFibonacci(numero)); // Exibimos o resultado no console
