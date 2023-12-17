import Category from './views/Category.js'
import Dashboard from './views/Dashboard.js'
import sidebar from '../components/SIDEBAR/js/sidebar.js'

const navigateTo = (url) => {
  history.pushState(null, null, url)
  router()
}

const router = async () => {
  const routes = [
    { path: '/', view: Category },
    { path: '/dashboard', view: Dashboard },
    { path: '/category', view: Category },
  ]

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    }
  })

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch)

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    }
  }

  const view = new match.route.view()

  const sidebarContent = await sidebar()
  document.querySelector('#main').innerHTML = await view.getHtml()
  document.querySelector('#sidebar').innerHTML = sidebarContent
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
