// Valores de faturamento por estado
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula o valor total de faturamento
const total = Object.values(faturamento).reduce((soma, valor) => soma + valor, 0);

// Calcula e exibe o percentual de cada estado
for (const estado in faturamento) {
    const percentual = (faturamento[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
