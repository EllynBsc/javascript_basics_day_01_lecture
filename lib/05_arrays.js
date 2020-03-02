// in ruby
// CRUD
// fruits = []
// fruits << "Apple"     # Create (fruits.push("Apple") works as well)
// fruits << 'mango'
// fruits[0]             # Read
// fruits[0] = "Banana"  # Update
// fruits.delete_at(0)   # Delete
// fruits.delete('mango')


// IN JS
const myFruits = ['mango', 'apple', 'banana']
// CRUD

// Create
myFruits.push('pear')
console.log(myFruits);
// READ
console.log(myFruits[0]);
// UPDATE
myFruits[0] = 'peach'
console.log(myFruits);

// DELETE
// myFruits.splice(indexOfStart, numberOfElements)

myFruits.splice(0,2)
console.log(myFruits)


// only diff with crud on arrays with ruby is the delete action






















