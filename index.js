const testNum = num => {
  if (num > 10) {
    return Promise.resolve(`${num} is greater than 10, success!`);
  } else {
    return Promise.reject(`${num} is less than or equal to 10, error!`)
  }
}

const makeAllCaps = wordArray => {
  if (wordArray.every(word => typeof word === 'string')) {
    return Promise.resolve(wordArray.map(word => word.toUpperCase()))
  }
  return Promise.reject(
    'No, the array you passed in contained an element that was not a string!'
  );
}

const sortWords = wordArray =>
  Promise.resolve(wordArray.sort());