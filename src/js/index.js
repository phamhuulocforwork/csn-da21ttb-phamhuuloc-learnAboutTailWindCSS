import sidebar from '../components/SIDEBAR/js/sidebar.js'
const sidebarContent = await sidebar()
document.querySelector('#sidebar').innerHTML = sidebarContent

import Home from './views/Home.js'
import Courses from './views/Courses.js'
import Category from './views/Category.js'
import MyCourses from './views/MyCourses.js'
import LessonDetail from './views/LessonDetail.js'

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
    { path: '/', view: Home },
    { path: '/courses/:id', view: Courses },
    { path: '/courses', view: Courses },
    // { path: '/my-courses/:id', view: MyCourses },
    { path: '/my-courses', view: MyCourses },
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

  document.querySelector('#main').innerHTML = await view.getHtml()
}

window.addEventListener('popstate', () => router())

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault()
      navigateTo(e.target.href)
    }
  })
  router()
})
