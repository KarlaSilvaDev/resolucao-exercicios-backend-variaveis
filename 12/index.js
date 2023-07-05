console.log('--- Taxa de Juros ---');
console.log(' i = (M/C)^(1/n) - 1');
let c = 60_000;
let n = 24;
let m = 90_000;
let i = ((m/c)**(1/n) - 1)*100;
console.log(`O seu financiamento de R$${c.toFixed(2)} teve uma taxa de juros de ${i.toFixed(3)}%, pois após ${n} meses você teve que pagar R$${m.toFixed(2)}.`);