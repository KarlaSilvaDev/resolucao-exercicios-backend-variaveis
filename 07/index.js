console.log('--- Casos de COVID-19 ---');
console.log('P = P0 * x^(t/7)')
let p0 = 1_000;
let x = 4;
let t = 100;
console.log(`\nDados: 
\nPopulação Inicial Infectada (P0): ${p0} pessoas 
\nQuantidade de pessoas para as quais um paciente infectado pode transmitir (x): ${x} \nTempo (t): ${t} dias`);
let p=p0*x**(t/7);
console.log(`\nResultado: \nPopulação futura infectada (P): ${p.toFixed(0)} pessoas`);