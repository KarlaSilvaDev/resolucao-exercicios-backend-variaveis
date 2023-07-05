console.log('--- Cálculo do Perímetro e Área de um Círculo ---');
console.log('Perímetro: C = 2*pi*R');
console.log('Área:      A = pi*R²');
let r = 1;
let c = 2 * Math.PI * r;
let a = Math.PI * r ** 2;
console.log(`\nDados: \nRaio (R): ${r}cm`);
console.log(`\nResultado: \nPerímetro (C): ${c.toFixed(1)}cm \nÁrea (A): ${a.toFixed(2)}cm²`);