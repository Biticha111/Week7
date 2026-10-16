// Pre-requisites for android programming - C# or Java

let takenCSharp = false
let takenJava = true


if (takenCSharp || takenJava) {
    console.log('You meet the pre-requisites for android')
} else {
    console.log('You must take C# or Java')
}

//To be a senator, there are 3 requirements:
// you must be at least 30 years old
// you have to have been a US citizen for 9 or more years
// you must live in the state you went to represent

let age = 35
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWentToRepresent = 'Wisconsin'


if (age >= 30 && usCitizenTime >= 9 && stateOfResidence === stateWentToRepresent) {
    console.log('You are eligible to be a senator')
} else {
    console.log('Sorry, you are not eligible')
}

if ('' == 0) {
    console.log('the sama!')
} else {
    console.log('not the same!')
}