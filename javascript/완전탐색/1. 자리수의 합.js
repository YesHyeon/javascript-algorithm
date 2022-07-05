// 자릿수의 합

// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
// ▣ 입력설명
// 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 10,000,000를 넘지 않는다.
// ▣ 출력설명
// 자릿수의 합이 최대인 자연수를 출력한다.
// ▣ 입력예제 1
// 7
// 128 460 603 40 521 137 123
// ▣ 출력예제 1
// 137

// 배운점
// 1. number는 length 인식이 안된다.
// 2. charAt은 문자열 자를 때 쓰는 것.

function solution(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (i of arr) {
    let sum = 0;
    for (var a = 0; a <= String(i).length - 1; a++) {
      sum += Number(String(i).charAt(a));
    }
    if (sum > max) {
      max = sum;
      answer = i;
    } else if (sum == max) {
      i > answer ? (answer = i) : (answer = answer);
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
