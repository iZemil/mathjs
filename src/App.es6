import gcd from './gcd.es6';
import lcm from './lcm.es6';
import transponse from './transponse.es6';
import multiplyMatrix from './multiplyMatrix.es6';

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