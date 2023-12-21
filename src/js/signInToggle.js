import { getAllUsers } from './api/user.js'

document.addEventListener('DOMContentLoaded', () => {
  const signInFrom = document.querySelector('#signInFrom')
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')

  if (signInFrom) {
    signInFrom.addEventListener('submit', (e) => {
      e.preventDefault()
      signup()
    })
  }

  const signup = () => {
    const userEmailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const users = getAllUsers()

    const matchedUser = users.find(
      (user) =>
        user.Email === userEmailValue && user.Password === passwordValue,
    )

    if (matchedUser) {
      const json = JSON.stringify(matchedUser)
      localStorage.setItem('user', json)
      window.location.href = '/'
    } else {
      alert('Incorrect email or password')
    }
  }
})
