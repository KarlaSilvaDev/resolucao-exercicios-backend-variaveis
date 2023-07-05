const meu_dinheiro = 80;
const valor_total = 129.99;
let valor_do_desconto = (1 - (meu_dinheiro/valor_total))*100;
console.log(`Orçamento: R$${meu_dinheiro.toFixed(2)}\nValor do tênis: R$${valor_total.toFixed(2)}\nDesconto necessário: ${valor_do_desconto.toFixed(1)}%`);