// Умножение матрицы на число/матрицу

export default function multiplyMatrix(A, B) {
  if (typeof A == 'number') {
    var m = B.length,
        n = B[0].length,
            B = [];
    for (var i = 0; i < m; i++) { B[i] = [];
      for (var j = 0; j < n; j++) {
        B[i][j] = A*B[i][j];
      }
    }
    return B;
  } else {
    var rowsA = A.length,
        colsA = A[0].length,
        rowsB = B.length,
        colsB = B[0].length,
        C = [];
    
    if (colsA != rowsB) return false;
    for (var i = 0; i < rowsA; i++) C[i] = [];
    for (var k = 0; k < colsB; k++)
     { for (var i = 0; i < rowsA; i++)
        { var t = 0;
          for (var j = 0; j < rowsB; j++) t += A[i][j]*B[j][k];
          C[i][k] = t;
        }
     }
    return C;
  }
}