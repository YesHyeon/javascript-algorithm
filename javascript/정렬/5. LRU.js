function solution(len, arr) {
  let answer = Array.from({ length: len }, () => {
    return 0;
  });

  for (let i = 0; i < arr.length; i++) {
    let item_index = answer.indexOf(arr[i]);
    if (answer.indexOf(arr[i]) == -1) answer.unshift(arr[i]);
    else {
      answer.splice(item_index, 1);
      answer.unshift(arr[i]);
    }

    if (answer.length > len) {
      answer.pop();
    }
  }
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
