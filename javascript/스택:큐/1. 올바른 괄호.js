function solution(n) {
  let result = [];
  let answer = 'NO';
  let left = '(';
  let right = ')';

  for (let i = 0; i < n.length; i++) {
    console.log(result);
    if (n[i] == left) {
      result.push(n[i]);
    } else {
      result.pop();
    }
  }

  if (result.length == 0) {
    answer = 'YES';
  }

  return answer;
}
let a = '(()()())';
console.log(solution(a));
