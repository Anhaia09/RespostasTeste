function isFibonacci(num) {
    let a = 0;
    let b = 1;

    while (a < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    if (a === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
    }
}

// Teste
const numero = 100;
console.log(isFibonacci(numero));
