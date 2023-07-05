console.log('--- Taxa de Juros ---');
console.log(' i = (M/C)^(1/n) - 1');
let capitalInicial = 60_000;
let numMeses = 24;
let montante = 90_000;
let taxaJurosPercentual = ((montante/capitalInicial)**(1/numMeses) - 1)*100;
console.log(taxaJurosPercentual);
console.log(`O seu financiamento de R$${capitalInicial.toFixed(2)} teve uma taxa de juros de ${taxaJurosPercentual.toFixed(3)}%, pois após ${numMeses} meses você teve que pagar R$${montante.toFixed(2)}.`);