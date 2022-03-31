// 최솟값 구하기

// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 7개의 수가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 가장 작은 값을 출력한다.
// ▣ 입력예제 1
// 5 3 7 11 2 15 17
// ▣ 출력예제 1 2

function solution(arr) {
  let answer = arr[0];
  arr.forEach((element) => {
    if (answer >= element) {
      answer = element;
    }
  });
  return answer;

  // 내장함수 이용한다면 let answer = Math.min(...arr)
}

let arr = [1, 4, 1, 2, 1, 1, 1];
console.log(solution(arr));
