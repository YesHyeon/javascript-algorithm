function solution(n) {
  let result = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] != ')') {
      result.push(n[i]);
    } else if (n[i] == ')') {
      while (result.at(-1) != '(') {
        result.pop();
      }
      result.pop();
    }
  }
  result = result.join(' ');
  return result;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
