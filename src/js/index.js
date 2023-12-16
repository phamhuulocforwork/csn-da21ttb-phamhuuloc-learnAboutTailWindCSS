/*
TODO: 
- Tạo API giả cho sidebar item. DONE ✅
- Tạo API giả cho product card. DONE ✅
- Thêm status cho card.
- Hiện thị số người tham gia khoá học.
- Mũi tên về đầu trang, cuối trang .
- Sửa logo.
- Sửa lại sidebar và responsive cho mobile. DONE ✅
*/
// import sidebar from '../components/SIDEBAR/js/sidebar.js'
// import card from '../components/CARD/js/card.js'

// //sidebar
// sidebar.sidebarLoader()
// const barButton = document.querySelector('.barButton')
// const xBtn = document.querySelector('.x-btn')
// const closeSidebar = () => {
//   const sidebar = document.querySelector('.sidebar')
//   if (!sidebar.classList.contains('hidden')) {
//     sidebar.classList.add('hidden')
//   } else {
//     sidebar.classList.remove('hidden')
//   }
// }
// const sidebarToggle = () => {
//   if (barButton) {
//     barButton.onclick = () => closeSidebar()
//   }
//   if (xBtn) {
//     xBtn.onclick = () => closeSidebar()
//   }
// }
// sidebarToggle()
// card.cardLoader()

import Home from './views/Home.js'

const navigateTo = (url) => {
  history.pushState(null, null, url)
  router()
}

const router = async () => {
  const routes = [
    { path: '/', view: Home },
    // { path: '/dashboard', view: () => console.log('Viewing posts') },
    // { path: '/category', view: () => console.log('Viewing category') },
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

  document.querySelector('#root').innerHTML = await view.getHtml()
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
