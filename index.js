/*
Return true if the given string is a palindrome. Otherwise, return false.
We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
 */

const palindrome = str => {
  return (
    str
      .replace(/[^A-Za-z0-9]/g, '')
      .toLowerCase()
      .split('')
      .reverse()
      .join('') === str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
  );
};

// console.log(palindrome('eye'));
// console.log(palindrome('_Eye'));

/*Write a function selectionSort which takes an array of integers as input and returns
 an array of these integers in sorted order from least to greatest. */

const swap = (a, b, arr) => {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
};

const selectionSort = array => {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) min = j;
    }
    swap(i, min, array);
  }
  return array;
};

// console.log(
//   selectionSort([
//     1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
//   ])
// );

/*You will be provided with an initial array (the first argument in the destroyer function),
 followed by one or more arguments.Remove all elements from the initial array that are of
 the same value as these arguments. */

const destroyer = arr => {
  let valsToRemove = [...arguments].slice(1);

  return arr.filter(val => {
    return !valsToRemove.includes(val);
  });
};

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //should return [1, 1]

/*Make a function that looks through an array of objects (first argument) and returns an array
of all objects that have matching name and value pairs (second argument). Each name and value
pair of the source object has to be present in the object from the collection if it is to be
included in the returned array. */

const whatIsInAName = (collection, source) => {
  var srcKeys = Object.keys(source);

  return collection.filter(obj =>
    srcKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
  );
};

// console.log(
//   whatIsInAName(
//     [
//       { first: 'Romeo', last: 'Montague' },
//       { first: 'Mercutio', last: null },
//       { first: 'Tybalt', last: 'Capulet' },
//     ],
//     { last: 'Capulet' }
//   )
// ); // [{ first: "Tybalt", last: "Capulet" }]

/*
Create a function that takes two or more arrays and returns an array of their symmetric difference. 
The returned array must contain only unique values (no duplicates).
 */

const reducer = (result, arr) => {
  const compare = new Set(arr);
  for (let val of compare) {
    if (result.has(val)) {
      result.delete(val);
    } else {
      result.add(val);
    }
  }
  return result;
};

const sum = (...args) => {
  return [...args.reduce(reducer, new Set())];
};

// console.log(sum([1, 2, 3], [5, 2, 1, 4]));
/*Write a function bubbleSort which takes an array of integers as input and
 returns an array of these integers in sorted order from least to greatest. */

const bubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1])
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }
  }
  return array;
};

// console.log(bubbleSort([8, 4, 9, 1, 7]));

/*For example, sumAll([4,1]) should return 10 because sum of 
all the numbers between 1 and 4 (both inclusive) is 10. */

const sumAll = arr => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let newArr = [];
  for (let i = min; i <= max; i++) {
    newArr.push(i);
  }
  const sum = newArr.reduce((acc, num) => (acc += num), 0);
  return sum;
};

// console.log(sumAll([1, 4]));

/*Compare two arrays and return a new array with any items only found in one
 of the two given arrays, but not both. In other words, return the symmetric
difference of the two arrays. */

const diffArray = (arr1, arr2) => {
  let difference = [];

  difference = [
    ...arr2.filter(x => arr1.indexOf(x) < 0),
    ...arr1.filter(x => arr2.indexOf(x) < 0),
  ];

  return difference;
};

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(
//   diffArray(
//     ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
//     ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
//   )
// );
