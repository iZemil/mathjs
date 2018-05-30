import gcd from './gcd.js';
import lcm from './lcm.js';
import transponse from './transponseMatrix.js';
import multiplyMatrix from './multiplyMatrix.js';

//
// Наибольший общий делитель 8
console.log(gcd([16, -48, 72]));

//
// Наименьшее общее кратное 144
console.log(lcm([16, -48, 72]));

//
// транспонирование матрицы
console.log(transponse([[1, 2], [3, 4], [5, 6]]));

//
// умножение матрицы
console.log(multiplyMatrix([[1, 2], [3, 4], [5, 6]], 2));
console.log(multiplyMatrix([[1, 1], [1, 1]], [[2, 2], [2, 2]]));