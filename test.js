
// test("테스트 설명", () => {
//   expect("검증 대상").toXxx("기대 결과");
// });

//Matcher 함수를 제공
const deepCopy = require('./code.js');

test('Test deep copy for an array', () => {
  const originalArray = [1, 2, 3];
  const copiedArray = deepCopy(originalArray);
  expect(copiedArray).toEqual(originalArray); 
  expect(copiedArray).not.toBe(originalArray); 
});

test('Test deep copy for an object', () => {
  const originalObject = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      zip: '10001',
    },
    hobbies: ['reading', 'swimming'],
  };
  const copiedObject = deepCopy(originalObject);
  expect(copiedObject).toEqual(originalObject);
  expect(copiedObject).not.toBe(originalObject);
  expect(copiedObject).toStrictEqual(originalObject);
});


test('Test deep copy for a Map', () => {
  const originalMap = new Map([['key1', 'value1'], ['key2', 'value2']]);
  const copiedMap = deepCopy(originalMap);
  expect([...copiedMap.entries()]).toEqual([...originalMap.entries()]);
  expect(copiedMap).not.toBe(originalMap);
  expect(copiedMap).toStrictEqual(originalMap);
});


test('Test deep copy for a Set', () => {
  const originalSet = new Set([1, 2, 3]);
  const copiedSet = deepCopy(originalSet);
  expect([...copiedSet]).toEqual([...originalSet]);
  expect(copiedSet).not.toBe(originalSet); 
  expect(copiedSet).toStrictEqual(originalSet); 

});


test('Test deep copy for a Date', () => {
  const originalDate = new Date('2023-10-31');
  const copiedDate = deepCopy(originalDate);
  expect(copiedDate).toEqual(originalDate);
  expect(copiedDate).not.toBe(originalDate);
});


test('Test deep copy for a RegExp', () => {
  const originalRegExp = /test/g;
  const copiedRegExp = deepCopy(originalRegExp);
  expect(copiedRegExp).toEqual(originalRegExp);
  expect(copiedRegExp).not.toBe(originalRegExp);
});

test('Test deep copy for a function', () => {
  const originalFunction = function (a, b) {
    return a + b;
  }
  const copiedFunction = deepCopy(originalFunction);
  expect(copiedFunction.source).toEqual(originalFunction.source);
});
