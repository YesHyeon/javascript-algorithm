// JadenCase 문자열 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  var arr = s.split(' ');
  var lowerArr = [];
  var answer = [];
  var notIncludeNullArr = [];

  for (q of arr) {
    notIncludeNullArr.push(q);
  }

  for (a of notIncludeNullArr) {
    if (a != '') {
      var lowerStr = a.toLowerCase();
      lowerArr.push(lowerStr);
    } else {
      lowerArr.push(' ');
    }
  }

  lowerArr = lowerArr.filter(function (item) {
    return item !== null && item !== undefined && item !== '';
  });

  for (b of lowerArr) {
    if (b != ' ') {
      var firstUpper = b[0].toUpperCase();
      var remainLower = b.slice(1);
      answer.push(firstUpper + remainLower);
    } else {
      answer.push('');
    }
  }

  return String(answer).replace(/,/g, ' ');
}
