/* 분수의 덧셈 */

// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
// 제한사항: 0 <numer1, denom1, numer2, denom2 < 1,000
/* 입출력 예 #1

1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.
입출력 예 #2

9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.
*/

function solution(numer1, denom1, numer2, denom2) {
  var answer = [];

  //분자 구하기
  const numer = numer1 * denom2 + numer2 * denom1;
  //분모 구하기
  const denum = denom1 * denom2;

  let a = numer;
  let b = denum;
  //최대 공약수 구하기
  //1. a와 b를 서로 나눈다. 나누어지면 b가 a와 b의 최대 공약수이다(a>b)
  //2. 나누어지지 않으면 b와 a % b(a와 b의 나머지값)로 다시 나눈다.
  //3. 나누어지면 a % b는 최대 공약수이다. 나누어지지 않으면 위를 계속 반복
  let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

  answer[0] = a / gcd(a, b);
  answer[1] = b / gcd(a, b);
  return answer;
}
