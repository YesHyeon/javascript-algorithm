function solution(str) {
  let count = 0;
  let answer;
  let mmap = new Map();

  for (var i = 0; i < str.length; i++) {
    if (mmap.has(str[i])) {
      mmap.set(str[i], mmap.get(str[i]) + 1);
    } else {
      mmap.set(str[i], 1);
    }
  }

  for (var [key, value] of mmap) {
    if (count < value) {
      count = value;
      answer = key;
    }
  }

  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
