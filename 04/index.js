let c = 1_000;
let t = 5;
let i = 12.5;
let m = c*(1 + i/100)**t;
console.log('---Cálculo de Juros Compostos---');
console.log('M = C(1+i)^t');
console.log(`Capital (C): R$ ${c.toFixed(2)} \nTaxa fixa (i): ${i}/mês \nTempo (t):${t} meses\nMontante (M): R$ ${m.toFixed(2)}`);
