let capital = 1_000;
let tempoMeses = 5;
let taxaMensal = 12.5;
let montante = capital*(1 + taxaMensal/100)**tempoMeses;
console.log('---Cálculo de Juros Compostos---');
console.log('M = C(1+i)^t');
console.log(`Capital (C): R$ ${capital.toFixed(2)} \nTaxa fixa (i): ${taxaMensal}/mês \nTempo (t):${tempoMeses} meses\nMontante (M): R$ ${montante.toFixed(2)}`);
