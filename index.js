const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  for (let j = 0; j < tutorials.length; j++){
    let array = tutorials[j].split(" ")
    for (let i = 0; i < array.length; i++){
      array[i] = array[i].substring(0, 1).toUpperCase() + array[i].substring(1, array[i].length)
    }
    tutorials[j] = array.join(" ")
  }
  return tutorials
}
