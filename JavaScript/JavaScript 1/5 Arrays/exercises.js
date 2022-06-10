const numbers = arrayFromRange(0, 10);
console.log(numbers);

function arrayFromRange(min, max) {
  const ans = [];
  for (min; min <= max; min++) ans.push(min);
  return ans;
}

function includes(array, searchElement) {
  for (let elem of array) if (elem === searchElement) return true;
  return false;
}
console.log(includes(numbers, 3));

function except(array, excluded) {
  const ans = [];
  for (let a of array) {
    ans.push(a);
    for (let exc of excluded)
      if (a === exc) {
        ans.pop();
        break;
      }
  }
  return ans;
}
console.log(except(numbers, [-6, -5, -1, 1]));

function move(array, index, offset) {
  if (offset + index < 0 || offset + index >= array.length) {
    console.error("Invalid offset");
    return;
  }
  direccion = offset / Math.abs(offset);
  let store;
  const copyArray = [...array];
  while (offset !== 0) {
    store = copyArray[index + direccion];
    copyArray[index + direccion] = copyArray[index];
    copyArray[index] = store;
    index += direccion;
    offset -= direccion;
  }
  return copyArray;
}
console.log(move(numbers, 9, -3));

function countOcurrences(array, searchElement) {
  return array.reduce((accumulator, searcher) => {
    return searcher === searchElement ? accumulator + 1 : accumulator;
  }, 0);
}
const num = [3, 7, 12, 9, 4, 6, 9, 2, 5, 9, 0, 2];
console.log(countOcurrences(num, 2));
num.reduce;

function getMax(array) {
  return array.reduce((previous, actual) =>
    actual > previous ? actual : previous
  );
}
console.log(getMax(num));

const movies = [
  { title: "a", year: 2018, rating: 4.8 },
  { title: "b", year: 2018, rating: 3.5 },
  { title: "c", year: 2018, rating: 4.9 },
  { title: "d", year: 2018, rating: 2.6 },
];
const titles = movies
  .filter(m => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);
console.log(titles);
