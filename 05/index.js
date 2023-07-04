
let x1, x2, y1;
x1 = x2 = y1 = 1;
let y2 = 4;
console.log('---Cálculo da distância entre dois pontos---');
console.log('d = ((x2 - x1)² + (y2 -y1)²)^(1/2)')
let distancia = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
console.log(`Dados: \nx1 = ${x1}cm \nx2 = ${x2}cm \ny1 = ${y1}cm \ny2 = ${y2}cm \n`);
console.log(`Distância (d) = ${distancia}cm`);