// 가장 짧은 문자거리

// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.
// ▣ 출력설명
// 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

function solution(s, t) {
  let p = 1000;
  let answer = [];
  for (let x = 0; x < s.length; x++) {
    if (s[x] !== t) {
      p += 1;
    } else if (s[x] == t) {
      p = 0;
    }
    answer.push(p);
  }
  for (let x = 0; x < s.length; x++) {
    if (s[s.length - x - 1] !== t) {
      p += 1;
      if (answer[s.length - x - 1] >= p) {
        answer[s.length - x - 1] = p;
      }
    } else if (s[s.length - x - 1] == t) {
      p = 0;
    }
  }
  return answer;
}

let str = "tttteachermode";
console.log(solution(str, "e"));
