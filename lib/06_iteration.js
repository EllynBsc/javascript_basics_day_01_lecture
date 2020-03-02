// in ruby

// my_fruits = ['mango', 'pear', 'apple']

// my_fruits.each do |element|
//  puts element
// end

// my_array = my_fruits.map do |element|
//  element.upcase
// end

// puts my_array

// in js
 const myFruits = ['mango', 'pear', 'apple'];

myFruits.forEach((element) => {
  console.log(element.toUpperCase());
});

// I want to have a new array with my fruits uppercase:
  // with forEach:
  // const newArray = [];
  // myFruits.forEach((element) => {
  //   newArray.push(element.toUpperCase());
  // });

  // console.log(myFruits);

  // with map:
  // const myArray = myFruits.map((element) => {
  //   return element.toUpperCase();
  // });

  // console.log(myArray)
