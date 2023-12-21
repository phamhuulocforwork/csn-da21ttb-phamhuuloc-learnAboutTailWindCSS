import sidebar from '../components/SIDEBAR/js/sidebar.js'
import header from '../components/HEADER/js/header.js'
const sidebarContent = await sidebar()
const headerContent = await header()
document.querySelector('#sidebar').innerHTML = sidebarContent
document.querySelector('#header').innerHTML = headerContent

import Home from './views/Home.js'
import SignInPopup from './views/SignInPopup.js'
import Courses from './views/Courses.js'
import MyCourses from './views/MyCourses.js'

const pathToRegex = (path) =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$')

const getParams = (match) => {
  const values = match.result.slice(1)
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1],
  )

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]]
    }),
  )
}

const navigateTo = (url) => {
  history.pushState(null, null, url)
  router()
}

const router = async () => {
  const routes = [
    { path: '/', querySelector: '#main', view: Home },
    { path: '/sign-in', querySelector: '#root', view: SignInPopup },
    { path: '/courses', querySelector: '#main', view: Courses },
    { path: '/my-courses', querySelector: '#main', view: MyCourses },
  ]

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    }
  })

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null,
  )

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    }
  }

  const view = new match.route.view(getParams(match))
  const querySelector = match.route.querySelector

  document.querySelector(querySelector).innerHTML = await view.getHtml()
}

window.addEventListener('popstate', () => router())

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault()
      navigateTo(e.target.href)
    }
  })
  const storedUser = JSON.parse(localStorage.getItem('user'))
  if (storedUser) {
    const signInBtn = document.getElementById('signInBtn')
    const signOutBtn = document.getElementById('signOutBtn')
    signInBtn.classList.remove('md:flexCenter')
    signOutBtn.classList.add('md:flexCenter')
  }
  router()
})
