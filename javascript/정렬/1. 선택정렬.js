function solution(arr) {
  let answer = arr;
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] >= arr[j]) {
        idx = j;
      }
    }
    let previousItem = arr[i];
    arr[i] = arr[idx];
    arr[idx] = previousItem;
  }

  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
