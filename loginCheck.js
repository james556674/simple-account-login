const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

let loginStatus = {
  loginConfirm: false
}

let loginAccount = []

function loginCheck(data) {
  let email = data.email
  let password = data.password

  loginAccount = users.find((item) => {
    return item.email === email
  })

  if (loginAccount && (loginAccount.password === password)) {
    console.log('login in')
    loginStatus.loginConfirm = true
    return true
  } else {
    console.log('fail')
    return false
  }

}

module.exports = loginStatus
module.exports = loginCheck