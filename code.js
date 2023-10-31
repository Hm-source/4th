// 4주차 deepCopy 과제
// 코어 자바스크립트에 나오는 Deep Copy 함수를 직접 작성해 주세요.
// 요구사항
// 다양한 자료형을 모두 만족할 수 있어야 합니다.(Map, Set, Date, RegExp 등)
// jest를 통해 테스트 코드를 작성해 주셔야 합니다.
// 코드는 github gist나 개인 레포에 작성해 주셔야 합니다.
// 기한 : 5주차 멘토링 전까지 해당 과제를 작성한 코드를 링크 형태로 전달해 주세요.


const deepObject = {
  name: 'John Doe', 
  age: 30, 
  isStudent: false, 
  favoriteFruits: ['apple', 'banana'], 
  contactInfo: new Map([['email', 'john@example.com']]),
  visitedCities: new Set(['New York', 'Los Angeles']), 
  birthDate: new Date('1993-05-15'), 
  address: {
    street: '123 Main St',
    city: 'New York',
  },
  greet: function () {
    console.log('Hello, I am John!');
  },
  regexPattern: /test\d+/i, 
}
function deepCopy(obj) {
  console.log('typeof obj : ', typeof obj);
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }
  if (obj instanceof Date) {
    console.log('date', obj);
    return new Date(obj.getTime());
  }
  if (obj instanceof Map) {
    console.log('map', obj);
    const copiedMap = new Map();

    for (const [key, value] of obj) {
      copiedMap.set(deepCopy(key), deepCopy(value));
    }
    return copiedMap
  }
  if (obj instanceof Set) {
    console.log('set', obj);
    const copiedSet = new Set();

    for (const value of obj) {
      copiedSet.add(deepCopy(value));
    }
    return copiedSet
  }
  if (obj instanceof RegExp) {
    console.log('RegExp', obj);
    const copiedRegExp = new RegExp(obj);
    return copiedRegExp
  }

  const copiedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copiedObj[key] = deepCopy(obj[key]);
    }
  }

  return copiedObj;
}
let result = deepCopy(deepObject)
console.log(result);

module.exports = deepCopy;