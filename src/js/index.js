import Home from './views/Home.js'
import Category from './views/Category.js'
import Dashboard from './views/Dashboard.js'
import SignIn from './views/SignIn.js'
import Lessons from './views/Lessons.js'

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
  console.log(pathToRegex('/category/:id'))
  const routes = [
    { path: '/', querySelector: '#root', view: Home },
    { path: '/dashboard', querySelector: '#main', view: Dashboard },
    { path: '/category', querySelector: '#main', view: Category },
    { path: '/category/:id', querySelector: '#main', view: Category },
    { path: '/lessons', querySelector: '#main', view: Lessons },
    { path: '/sign-in', querySelector: '#root', view: SignIn },
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

  document.querySelector('#root').innerHTML = await new Home().getHtml()

  const view = new match.route.view(getParams(match))
  const querySelector = match.route.querySelector

  document.querySelector(querySelector).innerHTML = await view.getHtml()
}

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault()
      navigateTo(e.target.href)
    }
  })

  router()
})
