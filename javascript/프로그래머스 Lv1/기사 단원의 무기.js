// 기사 단원의 무기
// https://school.programmers.co.kr/learn/courses/30/lessons/136798

function solution(number, limit, power) {
  var result = 0;
  var numArr = [];
  for (var i = 1; i <= number; i++) {
    var count = 0;
    for (var j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    numArr.push(count + 1);
  }

  for (var value of numArr) {
    if (value <= limit) {
      result = result + value;
    } else {
      result = result + power;
    }
  }
  return result;
}
