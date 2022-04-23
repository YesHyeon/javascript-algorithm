// 격자판 최대합

// 5*5 격자판
// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.
// ▣ 출력설명 최대합을 출력합니다.
// ▣ 입력예제
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19
// ▣ 출력예제
// 155
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let x_sum = (y_sum = 0);

  for (let x = 0; x < arr.length; x++) {
    x_sum = y_sum = 0;

    for (let y = 0; y < arr.length; y++) {
      x_sum += arr[x][y];
      y_sum += arr[y][x];
    }
    answer = Math.max(answer, x_sum, y_sum);
  }

  x_sum = y_sum = 0;

  for (let i = 0; i < arr.length; i++) {
    x_sum += arr[i][i];
    y_sum += arr[i][arr.length - 1 - i];
  }

  answer = Math.max(answer, x_sum, y_sum);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(arr));
