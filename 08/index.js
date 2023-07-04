console.log('--- Cálculo do Perímetro e Área de um Círculo ---');
console.log('Perímetro: C = 2*pi*R');
console.log('Área:      A = pi*R²');
let raio = 1;
let perímetro = 2 * Math.PI * raio;
let area = Math.PI * raio ** 2;
console.log(`\nDados: \nRaio (R): ${raio}cm`);
console.log(`\nResultado: \nPerímetro (C): ${perímetro.toFixed(1)}cm \nÁrea (A): ${area.toFixed(2)}cm²`);