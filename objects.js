let user = { username:'Belay', password: 'five'}

console.log(user.username)
console.log(user['username'])

console.log(user.password)
console.log(user['password'])

let whatProperty = 'password'
console.log(user["password"])

let usernameProperty = 'username'
console.log(user[usernameProperty])

user.password = 'seven'
console.log(user)

user['password'] = 'numbers'
console.log(user)

user.email = 'belayolani5@gmail.com'
console.log(user)
console.log(user.email)

