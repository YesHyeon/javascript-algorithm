function solution(a, b) {
  let answer = 'YES';
  let aMap = new Map();
  let bMap = new Map();

  if (a.length != b.length) return 'NO';

  for (let i = 0; i < a.length; i++) {
    if (aMap.has(a[i])) {
      aMap.set(a[i], aMap.get(a[i]) + 1);
    } else {
      aMap.set(a[i], 1);
    }

    if (bMap.has(b[i])) {
      bMap.set(b[i], bMap.get(b[i]) + 1);
    } else {
      bMap.set(b[i], 1);
    }
  }

  for (let [key, value] of aMap) {
    console.log(key, value);
    if (value !== bMap.get(key)) {
      answer = 'NO';
      break;
    }
  }

  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));
