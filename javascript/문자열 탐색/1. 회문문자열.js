// 회문 문자열

// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 대소문자를 구분하지 않습니다.

// 1번째 풀이방법

// function solution(s) {
//   let answer;
//   s = s.toLowerCase();
//   let start = "";
//   let finish = "";
//   for (var x = 0; x < s.length; x++) {
//     start += s[x];
//     finish += s[s.length - 1 - x];
//   }
//   {
//     start === finish ? (answer = "YES") : (answer = "NO");
//   }
//   return answer;
// }
// let str = "goooG";
// console.log(solution(str));

// 2번째 풀이방법

function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  for (var x = 0; x < Math.floor(s.length / 2); x++) {
    if (s[x] !== s[s.length - x - 1]) {
      return "NO";
    }
  }

  return answer;
}

let str = "gdooodG";
console.log(solution(str));
