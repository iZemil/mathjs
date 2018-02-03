// НОК
// Наименьшее общее кратное (НОК, англ. LCM) нескольких целых чисел a1,a2,…,an
// есть наименьшее из натуральных чисел, которое делится на каждое из данных чисел.
// Например, NOK(15,25)=75 и NOK(16,−48,72)=144

export default function lcm(arr) {
  var  n = arr.length,
       a = Math.abs(arr[0]);

  for (var i = 1; i < n; i++) {
    var b = Math.abs(arr[i]), c = a;

    while (a && b) {
      a > b ? a %= b : b %= a;
    } 
    a = Math.abs(c*arr[i])/(a+b);
  }
  return a;
}