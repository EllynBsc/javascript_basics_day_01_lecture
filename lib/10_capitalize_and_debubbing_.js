const capitalize = (word) => {
  //1. split the word in 2 parts: first one and second one
  //2. first one we uppercase it
  const firstLetter = word[0].toUpperCase();
  console.log('first letter:', firstLetter)
  //3. second part we lowercase it
  const restOfWord = word.substring(1).toLowerCase();
  console.log('rest of Word:', restOfWord)

  //4. at the end, we return the full name with concatenation or interpolation
  // return firstLetter + restOfWord; // concatenation
  return `${firstLetter}${restOfWord}` // interpolation
}

// input word (string)
// output word (string)

console.log(capitalize('marco')) // 'Marco'
