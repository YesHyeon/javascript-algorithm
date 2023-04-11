function solution(k, arr) {
  let answer = 0;
  let sum = 0;

  for (var i = 0; i < k; i++) {
    sum += arr[i];
  }
  answer = sum;

  for (var j = k; j < arr.length; j++) {
    sum += arr[j] - arr[j - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

let a = [12, 100, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
