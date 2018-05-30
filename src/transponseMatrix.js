// Транспонирование матрицы
// На входе двумерный массив


export default function transponse(arr) {
    var m = arr.length,
        n = arr[0].length,
        AT = [];

    for (var i = 0; i < n; i+=1) {
        AT[i] = [];

        for (var j = 0; j < m; j+=1) {
            AT[i][j] = arr[j][i];
        }
    }
    return AT;
}