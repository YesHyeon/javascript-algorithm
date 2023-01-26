// 가장 가까운 같은 글자
// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  var answer = [];

  for (var i = 0; i < s.length; i++) {
    var correct = -1;
    for (var j = 0; j < i; j++) {
      if (s[i] == s[j]) {
        correct = i - j;
      }
    }
    answer.push(correct);
  }
  return answer;
}
