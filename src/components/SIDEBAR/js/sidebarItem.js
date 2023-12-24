// import { getAllSidebarItems } from '../../../js/api/sidebar.js'

// export default async () => {
//   try {
//     let sidebarItem = ''
//     const sidebarData = await getAllSidebarItems()

//     sidebarData.forEach((data) => {
//       if (data) {
//         sidebarItem += `
//             <a href="${data.path}" class="btn_sidebar capitalize" data-link>
//               <div class="flexCenter gap-x-2 py-4">
//                 ${data.iconSvg}
//               </div>
//               ${data.title}
//             </a>
//           `
//       }
//     })
//     return sidebarItem
//   } catch (error) {
//     console.log('Fail to get sidebar: ', error)
//   }
// }

import { getAllSidebarItems } from '../../../js/api/sidebar.js'

const displaySidebarItems = async () => {
  try {
    let sidebarItem = ''
    const sidebarData = await getAllSidebarItems()
    const user = JSON.parse(localStorage.getItem('user'))
    const userPermissions = user ? user.permissions : 'public'

    sidebarData.forEach((data) => {
      if (
        data.permissions.includes(userPermissions) ||
        data.permissions.includes('public')
      ) {
        sidebarItem += `
          <a href="${data.path}" class="btn_sidebar dark:bg-gray-800 capitalize" data-link>
            <div class="flexCenter gap-x-2 py-4">
              ${data.iconSvg}
            </div>
            ${data.title}
          </a>
        `
      }
    })
    return sidebarItem
  } catch (error) {
    console.log('Fail to get sidebar: ', error)
  }
}

export default displaySidebarItems
