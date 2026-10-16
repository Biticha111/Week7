console.log('Hello World!')

//Three ways to create variables
let color = 'blue'
var size = 'medium'  // not recommended
const language = 'javascript' //can change this value
//language = 'C#' this is an error

let quantity = 5
let distance = 4.5
let text = 'Hello World!'
let message = "Hello Programmers"

console.log( 'There are ' + quantity +  ' Progammers')

let todayTemp =75
// Can you use this veriable to console.log
// the message "Today's  tempreture is 75F

console.log( 'Today\'s temperature is '+ todayTemp + 'F')

let tempC =(todayTemp - 32) * 5/9
console.log('Today\'s temprature is ' + tempC.toFixed(2 ) + 'C')
console.log(`Today's temperature is ${tempC.toFixed(2)}C which is equivalent to ${todayTemp}F`);



// Can you use these variables and a template string to console.log the messege
//'This class is ITEC 2560 Web Programming'

let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'

console.log(`This class is ${department} ${classCode} ${className}`)
