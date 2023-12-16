import sidebarApi from './sidebarApi.js'
import { ICON } from '../../../js/fake-api.js'

export default async () => {
  try {
    let sidebarItem = ''
    const sidebarData = await sidebarApi.getAll()
    sidebarData.forEach((data) => {
      const getIcon = () => {
        const icon = ICON.find((item) => item.name === data.iconName)
        return icon ? icon.svg : null
      }
      if (data) {
        sidebarItem += `
            <a href="${data.path}" onclick="route()" class="btn_sidebar">
              <div class="flexCenter gap-x-2 py-4">
                ${getIcon()}
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
