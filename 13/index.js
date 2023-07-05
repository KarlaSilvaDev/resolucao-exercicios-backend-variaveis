console.log('--- Área total de um Cilindro ---');
console.log('At = 2*pi*R*(R+H)');
let raioBase = 3;
let altura = 1;
let areaTotal = 2 * Math.PI * raioBase * (raioBase + altura);
console.log(`\nDados: \nRaio da base (R): ${raioBase}cm \nAltura (H): ${altura}cm `);
console.log(`\nResultado: \nÁrea total (At): ${areaTotal.toFixed(2)}cm² `);

