function solution(a, b) {
  let answer = 0;
  let sh = new Map();
  let bsh = new Map();
  let k = b.length;

  for (let i = 0; i < k; i++) {
    if (sh.has(a[i])) {
      sh.set(a[i], sh.get(a[i]) + 1);
    } else {
      sh.set(a[i], 1);
    }

    if (bsh.has(b[i])) {
      bsh.set(b[i], bsh.get(b[i]) + 1);
    } else {
      bsh.set(b[i], 1);
    }
  }

  console.log(sh, bsh);

  for (let i = k; i <= a.length; i++) {
    console.log(sh);
    let idtCount = 0;

    for (let [key, value] of bsh) {
      if (value == sh.get(key)) {
        idtCount++;
      }

      if (idtCount == k) {
        answer++;
      }
    }

    if (sh.has(a[i - k])) {
      sh.set(a[i - k], sh.get(a[i - k]) - 1);
      if (sh.get(a[i - k]) == 0) {
        sh.delete(a[i - k]);
      }
    } else {
      sh.delete(a[i - k]);
    }

    if (sh.has(a[i])) {
      sh.set(a[i], sh.get(a[i]) + 1);
    } else {
      sh.set(a[i], 1);
    }
  }

  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
