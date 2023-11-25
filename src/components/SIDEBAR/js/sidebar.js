import sidebarApi from './sidebarApi.js'

const sidebarLoader = () => {
  try {
    const sidebar = document.querySelector('.sidebar')
    if (sidebar) {
      sidebar.innerHTML = `
        <div class="p-5 flex">
        <img src="/public/logo.svg" alt="logo" />
        </div>
        <hr class="my-2 text-gray-600" />
        <div class="h-full flex w-56 flex-col z-30">
          <div class="flex flex-col overflow-auto bg-white">
            <div class="sidebarItem flex flex-col w-full"></div>
          </div>
        </div>
      `
      getSidebarItem()
    }
  } catch {
    console.log('Fail to load sidebar: ', error)
  }
}

const getSidebarItem = async () => {
  try {
    const sidebarData = await sidebarApi.getAll()
    sidebarData.forEach((data) => {
      const sidebarItem = document.querySelector('.sidebarItem')
      if (sidebarItem) {
        sidebarItem.innerHTML += `
          <a href="${data.path}" onclick="route()" class="btn_sidebar">
            <div class="flexCenter gap-x-2 py-4">
              ${data.icon}
            </div>
            ${data.title}
          </a>
        `
      }
    })
  } catch (error) {
    console.log('Fail to get sidebar: ', error)
  }
}

export default { sidebarLoader, getSidebarItem }
