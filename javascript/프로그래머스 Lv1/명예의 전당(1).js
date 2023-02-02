// 명예의 전당(1)
// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  let answer = [];
  let star = [];
  for (let i = 0; i < score.length; i++) {
    if (star.length == k) {
      if (Math.min(...star) <= score[i]) {
        min = Math.min(...star);
        minIndex = star.indexOf(min);
        star.splice(minIndex, 1);
        star.push(score[i]);
        answer.push(Math.min(...star));
      } else {
        answer.push(Math.min(...star));
      }
    } else {
      star.push(score[i]);
      answer.push(Math.min(...star));
    }
  }
  return answer;
}
