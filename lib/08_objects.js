
const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

// console.log(typeof(student));
// keys are always strings
// symbols dont' exist in js

// CRUD

// CREATE
  // first way (like in ruby)
  // console.log(student['age'] = 18);
  // console.log(student)

  // second way of doing with .key:
  student.age = 22;
  console.log(student);


// READ
console.log(student.firstName)
console.log(student['firstName'])

// UPDATE (same as in ruby)
  // student['age'] = 18
  // student.age = 24;
  // console.log(student);

// DELETE

delete(student['lastName']);
console.log(student);









