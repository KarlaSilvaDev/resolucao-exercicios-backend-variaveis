console.log('--- Casos de COVID-19 ---');
console.log('P = P0 * x^(t/7)')
let populacaoInicialInfectada = 1_000;
let potencialTransmissaoPorInfectado = 4;
let tempoDias = 100;
console.log(`\nDados: 
\nPopulação Inicial Infectada (P0): ${populacaoInicialInfectada} pessoas 
\nQuantidade de pessoas para as quais um paciente infectado pode transmitir (x): ${potencialTransmissaoPorInfectado} \nTempo (t): ${tempoDias} dias`);
let populacaoFuturaInfectada=populacaoInicialInfectada*potencialTransmissaoPorInfectado**(tempoDias/7);
console.log(`\nResultado: \nPopulação futura infectada (P): ${populacaoFuturaInfectada.toFixed(0)} pessoas`);