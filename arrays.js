let animals = ['lion', 'tiger', 'cheetah']

console.log(animals)
console.log(animals[1])
console.log(animals[1000])

animals[3] = 'giraffe'
console.log(animals)
console.log(animals[5])

animals [1] = 'zebra'
console.log(animals[1])

animals.push('elephant')
console.log(animals)

let lastAnimal = animals.pop()
console.log(lastAnimal)
console.log(animals)


animals.unshift('deer')
console.log(animals)

let fistAnimal = animals.shift()
console.log(fistAnimal)

animals.reverse()
console.log(animals)

animals.sort()
console.log(animals)

let numberOfAnimals = animals.length
console.log(numberOfAnimals)

console.log(animals.indexOf('lion'))

if (animals.indexOf('walrus') === -1) {
    console.log('walrus is not in the array')
}
    if (animals.includes('cheetah')) {
        console.log('cheetah is in the array')

        console.log(animals.join('*'))
    }
animals.forEach(function (animal) {
    console.log(animal.toUpperCase())
})

//Use a loop with your animals array,
//can you print the length of each animal name?

animals.forEach(function (animal) {
    console.log(animal.length)
})

// can you make a new array with the lengths each animal name?
// So for my example, [ 'cheetah', 'giraffe', 'lion', 'zebra' ]
// create an array [ 7,7,4,5]

animals.push('alligator')

let animalNameLengths =[]
animals.forEach(function (animal) {
    let length = animal.length
    animalNameLengths.push(length)
    console.log(animalNameLengths)
})
