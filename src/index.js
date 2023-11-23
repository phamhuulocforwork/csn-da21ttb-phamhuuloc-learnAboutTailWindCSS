import sidebarApi from './js/sidebarApi.js'
/*
TODO: 
- Tạo API giả cho sidebar item. DONE ✅
- Tạo API giả cho product card. 
- Thêm status cho card.
- Hiện thị số người tham gia khoá học.
- Mũi tên về đầu trang, cuối trang .
- Sửa logo.
- Sửa lại sidebar và responsive cho mobile.
*/
const getSidebar = async () => {
  try {
    const sidebarData = await sidebarApi.getAll()
    sidebarData.forEach((data) => {
      const sidebar = document.querySelector('.sidebarItem')
      if (sidebar) {
        sidebar.innerHTML += `
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

const main = () => {
  getSidebar()
}

main()
