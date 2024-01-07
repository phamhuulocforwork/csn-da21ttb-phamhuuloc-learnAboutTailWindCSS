import sidebar from '../components/SIDEBAR/js/sidebar.js'
import header from '../components/HEADER/js/header.js'
const sidebarContent = await sidebar()
const headerContent = await header()
document.querySelector('#sidebar').innerHTML = sidebarContent
document.querySelector('#header').innerHTML = headerContent
//=========================================================================
const sunIcon = document.querySelector('.sun')
const moonIcon = document.querySelector('.moon')

const userTheme = localStorage.getItem('theme')
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

const iconToggle = () => {
  moonIcon.classList.toggle('hidden')
  sunIcon.classList.toggle('hidden')
}

const themeCheck = () => {
  if (userTheme === 'dark' || (!userTheme && systemTheme)) {
    document.documentElement.classList.add('dark')
    moonIcon.classList.add('hidden')
    return
  }
  sunIcon.classList.add('hidden')
}

const themeSwitch = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    iconToggle()
    return
  }
  document.documentElement.classList.add('dark')
  localStorage.setItem('theme', 'dark')
  iconToggle()
}

sunIcon.addEventListener('click', () => {
  themeSwitch()
})

moonIcon.addEventListener('click', () => {
  themeSwitch()
})
//=========================================================================
import Home from './views/Home.js'
import SignInPopup from './views/SignInPopup.js'
import LessonDetail from './views/CoursesDetail.js'
import Courses from './views/Courses.js'
import CoursesByTag from './views/CoursesByTag.js'
import MyCourses from './views/MyCourses.js'
import Dashboard from './views/Dashboard.js'
import CrashPage from './views/CrashPage.js'
import Certificate from './views/Certificate.js'

const pathToRegex = (path) =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$')

console.log(location.pathname)

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
    { path: '/crash-page', querySelector: '#root', view: CrashPage },
    { path: '/', querySelector: '#main', view: Home },
    { path: '/dashboard', querySelector: '#main', view: Dashboard },
    { path: '/sign-in', querySelector: '#root', view: SignInPopup },
    { path: '/courses/:id', querySelector: '#main', view: LessonDetail },
    { path: '/tag/:tag', querySelector: '#main', view: CoursesByTag },
    { path: '/courses', querySelector: '#main', view: Courses },
    { path: '/my-courses', querySelector: '#main', view: MyCourses },
    { path: '/certificate/:id', querySelector: '#root', view: Certificate },
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
  themeCheck()
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault()
      navigateTo(e.target.href)
    }
  })
  const storedUser = JSON.parse(localStorage.getItem('user'))
  if (storedUser) {
    const signInBtn = document.querySelectorAll('.signInBtn')
    const signOutBtn = document.querySelectorAll('.signOutBtn')
    signInBtn.forEach((element) => {
      element.classList.toggle('hidden')
    })
    signOutBtn.forEach((element) => {
      element.classList.toggle('hidden')
    })
  }
  router()
})
