// НОД
// Наибольший общий делитель (НОД, англ. GCD) нескольких целых чисел a1, a2, …, an
// есть наибольшее из натуральных чисел, которое делит каждое из данных чисел.
// Например, 
// NOD⁡(15,30)=15 и NOD(16,−48, 72)=8

export default function gcd(arr) {
  var n = arr.length,
      x = Math.abs(arr[0]);

  for (var i = 1; i < n; i++) {
    var y = Math.abs(arr[i]);

    while (x && y) {
      x > y ? x %= y : y %= x;
    }
    x += y;
  }

  return x;
}