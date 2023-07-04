console.log('---Soma dos Ângulos Internos de um Polígono---');
console.log('S = (n - 2)*180');
console.log('Caso todos os ângulos sejam iguais: \na = S/n');
let numLados= 6;
let somaAngulosInternos = (numLados - 2)*180;
let angulosIguais = somaAngulosInternos/numLados;
console.log(`\nDados: \nNúmero de lados: ${numLados}`);
console.log(`\nResultado: \nSoma dos ângulos internos (S): ${somaAngulosInternos}° \nValor de cada ângulo se todos forem iguais (a): ${angulosIguais}°`);

