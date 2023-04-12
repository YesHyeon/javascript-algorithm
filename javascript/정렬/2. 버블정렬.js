function solution(arr) {
  let answer = arr;
  let loopCount = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] >= arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
    loopCount++;
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15, 1, 2];
console.log(solution(arr));
