// 최댓값과 최솟값
// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  var answer = '';
  var arr = s.split(' ');
  var max = Math.max(...arr);
  var min = Math.min(...arr);

  answer = `${min} ${max}`;
  return answer;
}
