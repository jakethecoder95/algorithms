const map = new Map();

map
  .set(1, "I")
  .set(5, "V")
  .set(10, "X")
  .set(50, "L")
  .set(100, "C")
  .set(500, "D")
  .set(1000, "M");

const convert = (num, placeVal) => {
  const half = 5 * placeVal;
  if (num < half) {
    if (num === 4 * placeVal) {
      return map.get(placeVal) + map.get(placeVal * 5);
    }
    return getRepeatVal(num / placeVal, map.get(placeVal));
  }
  if (num > half) {
    if (num === 9 * placeVal) {
      return map.get(placeVal) + map.get(placeVal * 10);
    }
    return (
      map.get(half) + getRepeatVal((num - half) / placeVal, map.get(placeVal))
    );
  }
  return map.get(num);
};

const getRepeatVal = (loops, val) => {
  let str = "";
  for (let i = 0; i < loops; i++) {
    str += val;
  }
  return str;
};

const convertToRoman = num => {
  let romanNum = "";

  if (num >= 1000) {
    let thousandVal = Math.floor(num / 1000) * 1000;
    romanNum += convert(thousandVal, 1000);
    num -= thousandVal;
  }
  if (num >= 100) {
    hundredVal = Math.floor(num / 100) * 100;
    romanNum += convert(hundredVal, 100);
    num -= hundredVal;
  }
  if (num >= 10) {
    tenVal = Math.floor(num / 10) * 10;
    romanNum += convert(tenVal, 10);
    num -= tenVal;
  }
  romanNum += convert(num, 1);
  num -= num;

  return romanNum;
};

const romanNumeral = convertToRoman(891);
console.log(romanNumeral);
