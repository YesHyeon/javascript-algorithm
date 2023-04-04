// 숫자의 표현
// https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  var answer = 0;

  for (var i = 1; i <= n; i++) {
    var init = 0;
    for (var j = i; j <= n; j++) {
      init += j;
      if (init == n) {
        answer++;
        break;
      } else if (init > n) {
        break;
      }
    }
  }

  return answer;
}
