// 중복된 값 제거
const nums = [1, 2, 3, 6, 6, 7, 2, 2, 8, 9];

// 1. set() : es6 문법, 중복허용 X
/* 
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);

console.log(mySet); //Set(2) { 1, 2 }
*/
const uniqueNums1 = [...new Set(nums)];
console.log(uniqueNums1); //[ 1, 2, 3, 6, 7, 8, 9 ]

// indexOf() : 배열함수, 배열의 요소를 전달해주면 그 요소가 있는 첫번째 인덱스를 반환
const uniqueNums2 = nums.filter((item, position) => {
  return nums.indexOf(item) === position;
});
console.log(uniqueNums2); //[ 1, 2, 3, 6, 7, 8, 9 ]
