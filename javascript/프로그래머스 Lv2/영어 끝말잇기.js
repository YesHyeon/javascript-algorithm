// 영어 끝말잇기
// https://school.programmers.co.kr/learn/courses/30/lessons/12981?language=javascript

function solution(n, words) {
  var answer = [];
  var failNum = 0;
  var whatIsReNumber = 1;
  var count = 0;
  var previousWords = [];

  outerLoop: for (var i = 0; i < words.length; i++) {
    count += 1;
    if (count == n + 1) {
      count = 1;
      whatIsReNumber += 1;
    }
    if (i > 0) {
      if (words[i].slice(0, 1) !== words[i - 1].slice(-1)) {
        failNum = count;
        break outerLoop;
      } else {
        // 단어 같을 때 분기처리
        for (var j = 0; j < previousWords.length; j++) {
          if (previousWords[j] == words[i]) {
            failNum = count;
            break outerLoop;
          }
        }
        previousWords.push(words[i]);
      }
    } else {
      previousWords.push(words[i]);
    }
  }

  if (failNum == 0) {
    answer = [0, 0];
  } else {
    answer = [failNum, whatIsReNumber];
  }

  return answer;
}
