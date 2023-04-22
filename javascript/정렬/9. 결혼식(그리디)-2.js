function solution(n) {
  let answer = 0;
  let newArr = [];

  n.forEach((e) => {
    newArr.push([e[0], 's']);
    newArr.push([e[1], 'e']);
  });

  newArr.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1].charCodeAt() - b[1].charCodeAt();
    }
    return a[0] - b[0];
  });

  let people = 0;
  newArr.forEach((e) => {
    if (e[1] === 's') {
      people++;
    } else {
      people--;
    }
    answer = Math.max(answer, people);
  });

  console.log(newArr);

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
