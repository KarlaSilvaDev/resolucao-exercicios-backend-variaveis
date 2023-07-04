const orçamento = 80;
const valorTenis = 129.99;
let desconto = (1 - (orçamento/valorTenis))*100;
console.log(`Orçamento: R$${orçamento.toFixed(2)}\nValor do tênis: R$${valorTenis.toFixed(2)}\nDesconto necessário: ${desconto.toFixed(1)}%`);

