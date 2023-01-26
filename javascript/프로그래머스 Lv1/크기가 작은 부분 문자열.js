// 크기가 작은 부분 문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
  var answer = 0;
  for (var i = 0; i <= t.length - p.length; i++) {
    var sliceResult = t.slice(i, i + p.length);
    if (sliceResult <= p) {
      answer++;
    }
  }
  return answer;
}
