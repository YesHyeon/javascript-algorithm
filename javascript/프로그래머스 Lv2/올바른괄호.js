// 올바른 괄호
// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  var answer = false;
  var stack = [];
  stackLeft = '(';
  stackRight = ')';
  if (s[0] == stackRight) {
    return answer;
  }

  for (var i = 0; i <= s.length; i++) {
    const cur = s[i];
    var stackLength = stack.length;
    if (s[i] == stackLeft) {
      stack.push(cur);
    } else if (s[i] == stackRight) {
      if (stack[stackLength - 1] == stackLeft) {
        stack.pop();
      }
    }
  }

  if (stack.length == 0) {
    answer = true;
  }

  return answer;
}
