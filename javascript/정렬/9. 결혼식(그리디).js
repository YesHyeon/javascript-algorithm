function solution(arr) {
  let answer = arr;
  let result = 0;

  answer.sort((a, b) => {
    return a[0] - b[0];
  });

  let endTime = 0; //14 18
  let people = 0; // 1 2
  answer.forEach((e) => {
    if (e[0] < endTime) {
      people++;
      result = Math.max(result, people);
    } else if (e[0] >= endTime) {
      people = 1;
      endTime = e[1];
      result = Math.max(result, people);
    }
  });
  console.log(answer);

  return result;
}

let arr = [
  [17, 28],
  [6, 30],
  [1, 27],
  [19, 38],
  [4, 46],
  [23, 30],
  [35, 43],
  [26, 45],
  [21, 31],
  [11, 44],
];

console.log(solution(arr));
