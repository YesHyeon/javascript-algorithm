function solution(arr) {
  var answer = 0;
  var xindex = [-1, 0, 1, 0];
  var yindex = [0, 1, 0, -1];
  var count = 0;
  var n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count = 0;
      for (let z = 0; z < xindex.length; z++) {
        var rowChange = i + xindex[z];
        var columnChange = j + yindex[z];
        if (
          rowChange < 0 ||
          columnChange < 0 ||
          rowChange >= arr.length ||
          columnChange >= arr.length
        ) {
          count++;
          continue;
        }

        if (arr[rowChange][columnChange] >= arr[i][j]) {
          count = 0;
          break;
        }
        count++;
      }
      if (count == 4) {
        answer++;
      }
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
