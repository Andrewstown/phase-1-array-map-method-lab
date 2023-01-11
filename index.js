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
  tutorials.forEach(element => {
    let array = element.split(" ")
    array.forEach(element2 => {
      element2 = element2.substring(0, 1).toUpperCase()
    })
    array.join(" ")
    console.log(array)
  });
  return tutorials
}
